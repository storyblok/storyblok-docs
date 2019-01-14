const watch = require('node-watch')
const frontmatter = require('front-matter')

const { resolve, join } = require('path')
const { readdir, stat } = require('fs').promises
const { mkdirSync, readFile, writeFile, mkdir, unlink, readdirSync, statSync } = require('fs')

const marked = require('marked')
const prism = require('prismjs')
const loadCodeLanguages = require('prismjs/components/')
const markedOptions = {
  highlight: function (code, lang) {
    loadCodeLanguages([lang])
		return prism.highlight(code, prism.languages[lang], lang)
	}
}

marked.setOptions(markedOptions)

// Configuration
const config = require('../docgen.config.js')
const args = process.argv
    .slice(2)
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key;
        return args;
    }, {});

let contents = {}

const FileHelper = {
  getFilesFromDirectory: async function* (dir) {
    const subdirs = await readdir(dir)
    for (const subdir of subdirs) {
      const res = resolve(dir, subdir)
      if ((await stat(res)).isDirectory()) {
        yield* FileHelper.getFilesFromDirectory(res)
      } else {
        yield res
      }
    }
  },

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
    return readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
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
    let routes = []
    FileHelper.getDirectories(config.originContentDir).forEach(origin => {
      contents[origin] = {}
      FileHelper.getDirectories(join(config.originContentDir, origin)).forEach(lang => {
        contents[origin][lang] = {}
        routes.push(`/${lang}/docs/${origin}/`)
      })
    })

    mkdirSync(config.docgenDir, { recursive: true })
    Docgen.generateRoutesForNuxt(routes)
    Docgen.generateAll()

    if (!!args.watch) { 
      watch(config.originContentDir, { recursive: true }, Docgen.fileEvent)
    }
  },

  fileEvent: (evt, updatedFile) => {
    if (evt == 'remove') {
      unlink(FileHelper.getCacheFilePath(updatedFile), (err) => {
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

    readFile(source, { encoding: 'utf8' }, (err, data) => {
      let path = FileHelper.getLanguageRelativeFilePath(source)
      let lang = FileHelper.getLanguageFromFile(source)
      let origin = FileHelper.getOriginFromFile(source)

      contents[origin][lang][path] = JSON.parse(data)

      // Docgen.generateCombined(contents, lang, origin)
      Docgen.generateMenu(contents, lang, origin)
      Docgen.generateOrdered(contents, lang, origin)
    })
  },

  generateCombined: (contents, language, origin) => {
    writeFile(FileHelper.getOutputFilePath(config.combinedContentFile, language, origin), JSON.stringify(contents[origin][language]), (err) => {
      if (err) throw err
    })
  },

  generateRoutesForNuxt: (routes) => {
    writeFile(config.routesFile, JSON.stringify(routes), (err) => {
      if (err) throw err
    })
  },

  generateOrdered: (contents, language, origin) => {
    let ordered = Docgen.orderContents(contents[origin][language])

    writeFile(FileHelper.getOutputFilePath(config.orderedContentFile, language, origin), JSON.stringify(ordered), (err) => {
      if (err) throw err
    })
  },

  generateMenu: (contents, language, origin) => {
    let ordered = Docgen.orderContents(contents[origin][language])

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

    writeFile(FileHelper.getOutputFilePath(config.menuContentFile, language, origin), JSON.stringify(menu), (err) => {
      if (err) throw err
    })
  },

  orderContents: (contents) => {
    return Object.values(contents).sort((a, b) => {
      if (a.attributes.position < b.attributes.position) return -1
      if (a.attributes.position > b.attributes.position) return 1
      return 0
    })
  },

  generateAll: () => {
    (async () => {
      for await (const f of FileHelper.getFilesFromDirectory(config.originContentDir)) {
        Docgen.generate(f)
      }
    })()
  },

  stripParagraphWrapper(markdown) { 
    return markdown.replace('<p>', '').replace('</p>\n', '')
  },

  generate: (source) => {
    if (FileHelper.isIgnoreFile(source)) {
      return 
    }
    readFile(source, { encoding: 'utf8' }, (err, originData) => {
      if (err) throw err
  
      let dir = FileHelper.getDirectoryPath(source)
      mkdir(dir, { recursive: true }, (err) => {
  
        let originContent = frontmatter(originData)
        let originDataBody = originContent.body
        let originDataAttributes = originContent.attributes
        
        let area = originDataBody.split(config.splitString)
  
        let content = marked(area[0] || '')
        let example = marked(area[1] || '')
        
        let contentPath = FileHelper.getRelativeFilePath(source)
        let path = FileHelper.getLanguageRelativeFilePath(source)
        let origin = FileHelper.getOriginFromFile(source)
        let lang = FileHelper.getLanguageFromFile(source)

        let data = {
          contentPath: contentPath,
          path: path,
          lang: lang,
          origin: origin,
          attributes: originDataAttributes,
          content: content,
          example: example
        }
  
        if (typeof originDataAttributes.title !== 'undefined') {
          data.title = Docgen.stripParagraphWrapper(marked(originDataAttributes.title))
        }
        
        let out = FileHelper.getCacheFilePath(source)
        writeFile(out, JSON.stringify(data), (err) => {
          if (err) throw err
          Docgen.updateCollections(out)
        })
      })
    })
  }
}

Docgen.init()