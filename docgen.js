const watch = require('node-watch')
const frontmatter = require('front-matter')

const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')

const args = process.argv
    .slice(2)
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key;
        return args;
    }, {});

const marked = require('marked')
const prism = require('prismjs')
const loadTechnologies = require('prismjs/components/')
const markedOptions = {
  highlight: function (code, lang) {
    loadTechnologies([lang])
		return prism.highlight(code, prism.languages[lang], lang)
	}
}

marked.setOptions(markedOptions)

// Configuration
const config = {
  baseDir: `${__dirname}/`,
  docgenDir: `${__dirname}/.docgen/`,
  orderedContentFile: `${__dirname}/static/{origin}.ordered.{lang}.json`,
  menuContentFile: `${__dirname}/static/{origin}.menu.{lang}.json`,
  routesFile: `${__dirname}/routes.json`,
  originContentDir: `${__dirname}/content/`,
  splitString: ';examplearea',
  ignoreFiles: [ '.DS_Store' ],
  
}

let contents = {}

const FileHelper = {
  getDirectoryPath(file) {
    return file.substring(0, file.lastIndexOf('/')).replace(config.baseDir, config.docgenDir)
  },

  getCacheFilePath(file) {
    return file.replace(config.baseDir, config.docgenDir).replace('.md', '.json')
  },

  getRelativeFilePath(file) {
    return '/' + file.replace(config.originContentDir, '').replace('.md', '').replace(config.docgenDir, '').replace('.json', '').replace('content/', '')
  },

  getLanguageRelativeFilePath(file) {
    let parts = FileHelper.getRelativeFilePath(file).split('/')
    return parts.slice(3, parts.length).join('/')
  },

  getLanguageFromFile(file) {
    return FileHelper.getRelativeFilePath(file).split('/')[2]
  },

  getOutputFilePath(file, language, origin) {
    return file.replace('{lang}', language).replace('{origin}', origin)
  },

  getOriginFromFile(file) {
    return FileHelper.getRelativeFilePath(file).split('/')[1]
  },

  getDirectories(p) {
    return fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
  },

  isIgnoreFile(source) {
    let toIgnore = false
    for (let index = 0, max = config.ignoreFiles.length; index < max; index++) {
      if (source.indexOf(config.ignoreFiles[index]) > -1) {
        toIgnore = true
        return toIgnore
      }
    }
    return toIgnore
  }
}

const Docgen = {
  init: () => {
    fs.ensureDirSync(config.docgenDir)

    Docgen.generateRoutesForNuxt()
    Docgen.generateAll()

    if (!!args.watch) { 
      watch(config.originContentDir, { recursive: true }, Docgen.handleFileChange)
    }
  },

  handleFileChange: (evt, updatedFile) => {
    if (evt == 'remove') {
      fs.unlink(FileHelper.getCacheFilePath(updatedFile), (err) => {
        if (err) throw err
      })
    } else {
      FileHelper.isIgnoreFile(updatedFile) ? false : Docgen.generate(updatedFile)
    }
  },

  updateCollections: (source) => {
    if (FileHelper.isIgnoreFile(source)) {
      return 
    }

    fs.readFile(source, { encoding: 'utf8' }, (err, data) => {
      let path = FileHelper.getLanguageRelativeFilePath(source)
      let lang = FileHelper.getLanguageFromFile(source)
      let origin = FileHelper.getOriginFromFile(source)

      contents[origin][lang][path] = JSON.parse(data)

      Docgen.generateMenu(contents, lang, origin)
      Docgen.generateOrdered(contents, lang, origin)
    })
  },

  generateRoutesForNuxt: () => {
    let routes = []
    FileHelper.getDirectories(config.originContentDir).forEach(origin => {
      contents[origin] = {}
      FileHelper.getDirectories(path.join(config.originContentDir, origin)).forEach(lang => {
        contents[origin][lang] = {}
        if(lang == 'en') {
          routes.push(`/docs/api/${origin}/`)          
        } else {
          routes.push(`/${lang}/docs/api/${origin}/`)
        }
      })
    })
    
    fs.writeFile(config.routesFile, JSON.stringify(routes), (err) => {
      if (err) throw err
    })
  },

  generateOrdered: (contents, language, origin) => {
    let ordered = Docgen.orderContent(contents[origin][language])

    fs.writeFile(FileHelper.getOutputFilePath(config.orderedContentFile, language, origin), JSON.stringify(ordered), (err) => {
      if (err) throw err
    })
  },

  generateMenu: (contents, language, origin) => {
    let ordered = Docgen.orderContent(contents[origin][language])

    let latestStartpage = null
    let categories = {}

    for (let index = 0, max = ordered.length; index < max; index++) {
      const element = JSON.parse(JSON.stringify(ordered[index]));
      delete element.example
      delete element.content
      delete element.origin

      let isChild = false

      // group by startpage
      if (latestStartpage == null) {
        latestStartpage = element
        latestStartpage.children = []
      } else if (typeof element.attributes !== 'undefined' && element.attributes.startpage) {
        latestStartpage = element
        latestStartpage.children = []
      } else {
        isChild = true
        latestStartpage.children.push(element)
      }
      
      // categories
      if (!isChild) { 
        if (typeof categories[element.attributes.category] !== 'undefined') { 
          categories[element.attributes.category].push(element)   
        } else {
          categories[element.attributes.category] = []
          categories[element.attributes.category].push(element)        
        }
      }
    }

    let menu = []
    for (const key in categories) {
      if (categories.hasOwnProperty(key)) {
        const category = categories[key];
        menu.push({ category: key, items: category })
      }
    }

    fs.writeFile(FileHelper.getOutputFilePath(config.menuContentFile, language, origin), JSON.stringify(menu), (err) => {
      if (err) throw err
    })
  },

  orderContent: (content) => {
    return Object.values(content).sort((a, b) => {
      if (a.attributes.position < b.attributes.position) return -1
      if (a.attributes.position > b.attributes.position) return 1
      return 0
    })
  },

  generateAll: () => {
    glob(`${__dirname}/content/**/*.md`, (err, files) => {
      files.forEach((file) => {
        Docgen.generate(file)
      })
    })
  },

  stripParagraphWrapper(markdown) { 
    return markdown.replace('<p>', '').replace('</p>\n', '')
  },

  prepareTemplate(string) {
    string = Docgen.replaceAll(string, '<p><RequestExample', '<RequestExample')
    string = Docgen.replaceAll(string, '</RequestExample></p>', '</RequestExample>')
    string = Docgen.replaceAll(string, '<table>', '<div class="table"><table>')
    string = Docgen.replaceAll(string, '</table>', '</table></div>')
    return string
  },

  replaceAll(target, search, replacement) {
    return target.replace(new RegExp(search, 'g'), replacement);
  },

  generate: (source) => {
    if (FileHelper.isIgnoreFile(source)) {
      return 
    }
    fs.readFile(source, { encoding: 'utf8' }, (err, originData) => {
      if (err) throw err
  
      let dir = FileHelper.getDirectoryPath(source)
      fs.mkdir(dir, { recursive: true }, (err) => {
  
        let originContent = frontmatter(originData)
        let area = originContent.body.split(config.splitString)
        let title = Docgen.stripParagraphWrapper(marked(originContent.attributes.title || ''))
        let methodContent = Docgen.prepareTemplate(marked(area[0] || ''))
        let methodExample = Docgen.prepareTemplate(marked(area[1] || ''))

        // source = .../content/content-delivery/en/topics/introduction.md
        
        // content-delivery/en/topics/introduction
        let contentPath = FileHelper.getRelativeFilePath(source) 

        // topics/introduction
        let path = FileHelper.getLanguageRelativeFilePath(source) 

        // content-delivery
        let origin = FileHelper.getOriginFromFile(source)
        
        // en
        let lang = FileHelper.getLanguageFromFile(source) 

        // prepare data for json
        let data = {
          contentPath: contentPath,
          path: path,
          lang: lang,
          origin: origin,
          title:title,
          attributes: originContent.attributes,
          content: methodContent,
          example: methodExample
        }
        
        // out = .../.docgen/content-delivery/en/topics/introduction.json
        let out = FileHelper.getCacheFilePath(source)
        fs.writeFile(out, JSON.stringify(data), (err) => {
          if (err) throw err
          Docgen.updateCollections(out)
        })
      })
    })
  }
}

Docgen.init()