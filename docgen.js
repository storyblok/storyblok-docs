const watch = require('node-watch')
const frontmatter = require('front-matter')

const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const config = require('./dg-config')

const args = process.argv
    .slice(2)
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key
        return args
    }, {})

const marked = require('marked')
const prism = require('prismjs')
const loadTechnologies = require('prismjs/components/')
const markedOptions = {
  highlight(code, lang) {
    loadTechnologies([lang])
    return prism.highlight(code, prism.languages[lang], lang)
  }
}
marked.setOptions(markedOptions)

const Docgen = {
  sections: {},

  init: () => {
    Docgen.generateRoutes()
    Docgen.coldstart()

    if (!!args.watch) { 
      watch(config.contentInputFolder, { filter: /\.md$/, recursive: true }, (event, contentFilePath) => {

        switch (event) {
          case 'remove':
            // contentFilePath = /my_absolute_file/content/content-delivery/en/topics/introduction.md  
            // contentPath = content-delivery/en/topics/introduction
            const contentPath = contentFilePath.replace(config.contentInputFolder, '').replace(path.parse(contentFilePath).ext, '')  
            // [ content-delivery, en, topics, introduction ]
            const contentPathParts = contentPath.replace(/\\/g, '/').split('/')
            // content-delivery
            const origin = contentPathParts.shift()
            // en
            const lang = contentPathParts.shift()
            // topics/introduction
            const relativePath = contentPathParts.join('/')

            delete Docgen.sections[origin][lang][relativePath]

            Docgen.generate(origin, lang)
          break
          default:
            const section = Docgen.load(contentFilePath)
            Docgen.generate(section.origin, section.lang)
            break
        }
      })
    }
  },

  coldstart: () => {
    glob(`${config.contentInputFolder}**/*.md`, (err, files) => {
      if (err) throw err

      files.forEach((contentFilePath) => {
        Docgen.load(contentFilePath)
      })

      Docgen.generateAll()
    })
  }, 
  
  generateAll: () => {
    // content-delivery, ...
    Docgen.listFoldersInFolder(config.contentInputFolder).forEach((origin) => {
      // en, ...
      Docgen.listFoldersInFolder(config.contentInputFolder + origin).forEach((lang) => {
        // generate sections and menu json from one language and origin
        Docgen.generate(origin, lang)
      })
    })
  },

  generate: (origin, lang) => {
    // order sections for one language and origin
    const orderedSections = Docgen.orderSections(Docgen.sections[origin][lang])
    Docgen.exportSections(orderedSections, origin, lang)

    // generate menu with nested categories
    const menu = Docgen.generateMenu(orderedSections)
    Docgen.exportMenu(menu, origin, lang)
  },

  generateMenu: (orderedSections) => {
    let latestStartpage = null
    let categories = {}

    for (let index = 0, max = orderedSections.length; index < max; index++) {
      const section = JSON.parse(JSON.stringify(orderedSections[index]))

      let isChild = false

      // group by startpage
      if (latestStartpage == null) {
        latestStartpage = section
        latestStartpage.children = []
      } else if (typeof section.attributes !== 'undefined' && section.attributes.startpage) {
        latestStartpage = section
        latestStartpage.children = []
      } else {
        isChild = true
        latestStartpage.children.push(section)
      }
      
      // categories
      if (!isChild) { 
        if (typeof categories[section.attributes.category] !== 'undefined') { 
          categories[section.attributes.category].push(section)   
        } else {
          categories[section.attributes.category] = []
          categories[section.attributes.category].push(section)        
        }
      }

      delete section.example
      delete section.content
      delete section.origin
      delete section.lang
    }

    const menu = []
    for (const key in categories) {
      if (categories.hasOwnProperty(key)) {
        const category = categories[key]
        menu.push({ category: key, items: category })
      }
    }

    return menu
  },

  exportMenu: (menu, origin, lang) => {
    return fs.writeFile(config.menuOutputFile.replace('{origin}', origin).replace('{lang}', lang), JSON.stringify(menu))
  },

  exportSections: (orderedSections, origin, lang) => {
    return fs.writeFileSync(config.sectionsOutputFile.replace('{origin}', origin).replace('{lang}', lang), JSON.stringify(orderedSections))
  },

  orderSections: (sections) => {
    return Object.values(sections).sort((a, b) => {
      if (a.attributes.position < b.attributes.position) return -1
      if (a.attributes.position > b.attributes.position) return 1
      return 0
    })
  },

  load: (contentFilePath) => {
    const content = fs.readFileSync(contentFilePath, { encoding: 'utf8' })

    const frontmatterContent = frontmatter(content)
    const title = marked(frontmatterContent.attributes.title || '').replace('<p>', '').replace('</p>\n', '') 
    const areas = frontmatterContent.body.split(config.splitString)
    const methodContent = Docgen.prepareTemplate(marked(areas[0] || ''))
    const methodExample = Docgen.prepareTemplate(marked(areas[1] || ''))

    // contentFilePath = /my_absolute_file/content/content-delivery/en/topics/introduction.md
    
    // contentPath = content-delivery/en/topics/introduction
    const contentPath = contentFilePath.replace(config.contentInputFolder, '').replace(path.parse(contentFilePath).ext, '')  
    
    // [ content-delivery, en, topics, introduction ]
    const contentPathParts = contentPath.replace(/\\/g, '/').split('/')

    // content-delivery
    const origin = contentPathParts.shift()
    
    // en
    const lang = contentPathParts.shift()

    // topics/introduction
    const relativePath = contentPathParts.join('/')

    // prepare data for json
    let section = {
      contentPath: contentPath, // content-delivery/en/topics/introduction
      path: relativePath, // topics/introduction
      lang: lang, // en
      origin: origin, // content-delivery
      title: title, // title from frontmatter
      attributes: frontmatterContent.attributes, // all attributes from frontmatter
      content: methodContent, // Markdown Content for left part of method section already as HTML
      example: methodExample // Markdown Content for right part of method section already as HTML
    }

    // check if origin already exists in sections object
    if (typeof Docgen.sections[origin] === 'undefined') {
      Docgen.sections[origin] = {}
    }

    // check if language already exists in section origin
    if (typeof Docgen.sections[origin][lang] === 'undefined') {
      Docgen.sections[origin][lang] = {}
    }

    // assign data to origin, lang and relativePath combination
    Docgen.sections[origin][lang][relativePath] = section 

    return section
  },

  generateRoutes: () => {
    const routes = []
    Docgen.listFoldersInFolder(config.contentInputFolder).forEach((origin) => {
      Docgen.listFoldersInFolder(config.contentInputFolder + origin).forEach((lang) => {
        if(lang == config.defaultLanguage) {
          routes.push(`/docs/api/${origin}/`)          
        } else {
          routes.push(`/${lang}/docs/api/${origin}/`)
        }
      })
    })

    fs.writeFile(config.availableRoutesFile, JSON.stringify(routes), (err) => {
      if (err) throw err
    })
  },

  prepareTemplate(string) {
    string = string.replace(new RegExp('<p><RequestExample', 'g'), '<RequestExample')
    string = string.replace(new RegExp('</RequestExample></p>', 'g'), '</RequestExample>')
    string = string.replace(new RegExp('<table>', 'g'), '<div class="table"><table>')
    string = string.replace(new RegExp('</table>', 'g'), '</table></div>')
    return string
  },

  listFoldersInFolder: (folder) => {
    return fs.readdirSync(folder).filter((file) => {
      return fs.statSync(path.join(folder, file)).isDirectory()
    })
  },
}

Docgen.init()