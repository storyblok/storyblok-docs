module.exports = {
  baseDir: `${__dirname}/`,
  docgenDir: `${__dirname}/.docgen/`,
  originContentDir: `${__dirname}/content/`,
  combinedContentFile: `${__dirname}/static/content.{lang}.json`,
  orderedContentFile: `${__dirname}/static/ordered.{lang}.json`,
  menuContentFile: `${__dirname}/static/menu.{lang}.json`,
  splitString: ';examplearea',
  languages: ['en', 'de'],
  ignoreFiles: [ '.DS_Store' ],  
}