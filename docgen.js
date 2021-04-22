const watch = require('node-watch')
const frontmatter = require('front-matter')
const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const config = require('./dg-config')
const marked = require('marked')
const prism = require('prismjs')
const loadTechnologies = require('prismjs/components/')
marked.setOptions({
  highlight(code, lang) {
    loadTechnologies([lang])
    return prism.highlight(code, prism.languages[lang], lang)
  }
})

const args = process.argv
    .slice(2)
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key
        return args
    }, {})

const Docgen = {
  sections: {},

  init: () => {
    console.log(process.env.THEME_ENV)

    Docgen.generateRoutes()
    Docgen.coldstart()
    if (!!args.watch) {
      watch(config.contentInputFolder, { filter: /\.md$/, recursive: true }, Docgen.handleFileEvent)
      watch(config.contentInputFolder, { filter: /\.json$/, recursive: false }, Docgen.handleMenuEvent)
    }
  },

  /**
   * Handles all node-watch file events (remove, update)
   * @param {string} event - node-watch event type; eg. 'remove' || 'change'
   * @param {string} contentFilePath - path to file that triggered that event
   */
  handleFileEvent: (event, contentFilePath) => {
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
  },

  /**
   * Handles all node-watch file events (remove, update)
   * @param {string} event - node-watch event type; eg. 'remove' || 'change'
   * @param {string} contentFilePath - path to file that triggered that event
   */
  handleMenuEvent: (event, contentFilePath) => {
    switch (event) {
      case 'remove':
        // ignore
        return
      break
      default:
        // [ content-delivery, en, json ]
        const contentPathParts = contentFilePath.replace(config.contentInputFolder, '').split('.')

        // content-delivery
        const origin = contentPathParts.shift()

        // en
        const lang = contentPathParts.shift()

        Docgen.exportMenu(origin, lang)
        break
    }
  },

  /**
   * Iterates through all markdown files, loads their content
   * and generates section JSONs after preparation
   */
  coldstart: () => {
    glob(`${config.contentInputFolder}**/*.md`, (err, files) => {
      if (err) throw err

      files.forEach((contentFilePath) => {
        Docgen.load(contentFilePath)
      })

      Docgen.generateAll()
    })
  },

  /**
   * Iterate through all origins and languages to trigger
   * the generate for each content file.
   */
  generateAll: () => {
    // content-delivery, ...
    Docgen.listFoldersInFolder(config.contentInputFolder).forEach((origin) => {
      // en, ...
      Docgen.listFoldersInFolder(config.contentInputFolder + origin).forEach((lang) => {
        // generate sections json from one language and origin
        Docgen.generate(origin, lang)
      })
    })
  },

  /**
   * Generates sections JSON for one origin and language combination
   * @param {string} origin - first level of content folder, eg.: content-delivery, managmenet
   * @param {string} lang - second level of content folder, eg.: en, de, es, it, ...
   */
  generate: (origin, lang) => {
    // order sections for one language and origin
    Docgen.exportSections(Docgen.sections[origin][lang], origin, lang)

    // copies menu to static
    Docgen.exportMenu(origin, lang)
  },

  /**
   * Exports the generated menu as JSON depending on origin and language
   * @param {string} origin - first level of content folder, eg.: content-delivery, managmenet
   * @param {string} lang - second level of content folder, eg.: en, de, es, it, ...
   */
  exportMenu: (origin, lang) => {
    fs.copySync(config.menuInputFile.replace('{origin}', origin).replace('{lang}', lang), config.menuOutputFile.replace('{origin}', origin).replace('{lang}', lang))
  },


  /**
   * Exports the sections as JSON depending on origin and language
   * @param {Array} sections - Array of section objects
   * @param {string} origin - first level of content folder, eg.: content-delivery, managmenet
   * @param {string} lang - second level of content folder, eg.: en, de, es, it, ...
   */
  exportSections: (sections, origin, lang) => {
    return fs.writeFileSync(config.sectionsOutputFile.replace('{origin}', origin).replace('{lang}', lang), JSON.stringify(sections))
  },

  /**
   * Loads one file into Docgen.sections
   * @param {string} contentFilePath - Absolute path to Content Source File, will be a *.md file containing frontmatter.
   * @returns {Object} section - Object containing parsed markdown and additional information
   */
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

  /**
   * Generate and export a routes.json which will be used by Nuxt during "nuxt generate"
   */
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

  /**
   * Replaces all wrapper <p> for our RequestExample component with an empty string array
   * as it otherwise would be an invalid HTML because RequestExample will be rendered to a Block Type
   * Element which is not allowed to be nested inside a paragraph.
   * Adds a wrapper div to each <table> so we can later add overflow-y container.
   * @param {string} html - HTML content from Markdown file
   * @returns {string} html
   */
  prepareTemplate(html) {
    html = html.replace(new RegExp('<p><RequestExample', 'g'), '<RequestExample')
    html = html.replace(new RegExp('</RequestExample></p>', 'g'), '</RequestExample>')
    html = html.replace(new RegExp('<table>', 'g'), '<div class="table"><table>')
    html = html.replace(new RegExp('</table>', 'g'), '</table></div>')
    return html
  },

  /**
   * Returns all first level subfolder names as string Array
   * @param {string} folder - Path to folder you want all first level subfolders.
   * @returns {Array<string>} folders - Array of folder names as string
   */
  listFoldersInFolder: (folder) => {
    return fs.readdirSync(folder).filter((file) => {
      return fs.statSync(path.join(folder, file)).isDirectory()
    })
  },
}

Docgen.init()
