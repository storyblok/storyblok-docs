const watch = require('node-watch')
const concat = require('json-concat')
const marked = require('marked')
const frontmatter = require('front-matter')

const prism = require('prismjs')
const loadLanguages = require('prismjs/components/')

const { resolve } = require('path')
const { readdir, stat } = require('fs').promises
const { mkdirSync, readFile, writeFile, mkdir, unlink } = require('fs')

// Configuration
const originContentDir = `${__dirname}/content/`
const stratumDir = `${__dirname}/.stratum`
const parsedContentDir = `${stratumDir}/content/`
const combinedContentFile = `${stratumDir}/content.json`
const orderedContentFile = `${stratumDir}/ordered.json`
const menuContentFile = `${stratumDir}/menu.json`
const markedOptions = {
  highlight: function (code, lang) {
    loadLanguages([lang])
		return prism.highlight(code, prism.languages[lang], lang)
	}
}

marked.setOptions(markedOptions)

const contents = {}

const updateCombinedContents = (source) => {
  readFile(source, { encoding: 'utf8' }, (err, data) => {
    let path = '/' + source.replace(parsedContentDir, '').replace('.json', '')
   
    contents[path] = JSON.parse(data)

    let ordered = Object.values(contents).sort((a, b) => {
      if (a.attributes.position < b.attributes.position) return -1
      if (a.attributes.position > b.attributes.position) return 1
      return 0
    })

    writeFile(combinedContentFile, JSON.stringify(contents), (err) => {
      if (err) throw err
    })

    let menu = [] 
    let latestStartpage = null

    for (let index = 0, max = ordered.length; index < max; index++) {
      const element = JSON.parse(JSON.stringify(ordered[index]));
      delete element.example
      delete element.content
      delete element.origin
      if (latestStartpage == null) {
        latestStartpage = element
        latestStartpage.children = []
      } else if (typeof element.attributes !== 'undefined' && element.attributes.startpage) {
        menu.push(latestStartpage)
        latestStartpage = element
        latestStartpage.children = []
      } else {
        latestStartpage.children.push(element)
      }
      if (index + 1 >= max) {
        menu.push(latestStartpage)
      }
    }

    writeFile(menuContentFile, JSON.stringify(menu, null, 2), (err) => {
      if (err) throw err
    })

    writeFile(orderedContentFile, JSON.stringify(ordered, null, 2), (err) => {
      if (err) throw err
    })
  })
}

const transformAllContents = () => {    
  (async () => {
    for await (const f of getFiles(originContentDir)) {
      markdownTransformer(f)
    }
  })()
}

async function* getFiles(dir) {
  const subdirs = await readdir(dir)
  for (const subdir of subdirs) {
    const res = resolve(dir, subdir)
    if ((await stat(res)).isDirectory()) {
      yield* getFiles(res)
    } else {
      yield res
    }
  }
}

const markdownTransformer = (source) => {
  readFile(source, { encoding: 'utf8' }, (err, originData) => {
    if (err) throw err

    let dir = source.substring(0, source.lastIndexOf('/')).replace(__dirname, stratumDir)
    mkdir(dir, { recursive: true }, (err) => {

      let originContent = frontmatter(originData)
      let originDataBody = originContent.body
      let originDataAttributes = originContent.attributes
      
      let area = originDataBody.split(';examplearea')

      let content = marked(area[0] || '')
      let example = marked(area[1] || '')
      
      let path = '/' + source.replace(originContentDir, '').replace('.md', '')

      let data = {
        path: path,
        attributes: originDataAttributes,
        content: content,
        example: example
      }

      if (typeof originDataAttributes.title !== 'undefined') {
        data.title = marked(originDataAttributes.title).replace('<p>', '').replace('</p>', '')
      }
      
      let out = source.replace('.md', '.json').replace(__dirname, stratumDir)

      writeFile(out, JSON.stringify(data), (err) => {
        if (err) throw err
        updateCombinedContents(out)
      })
    })
  })
}

mkdirSync(parsedContentDir, { recursive: true })

transformAllContents()

watch(originContentDir, { recursive: true }, (evt, updatedFile) => {
  if (evt == 'remove') {
    unlink(updatedFile.replace(originContentDir, parsedContentDir).replace('.md', '.json'), (err) => {
      if (err) throw err
    })
  }
  else {
    markdownTransformer(updatedFile)
  }
})
