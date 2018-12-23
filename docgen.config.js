module.exports = {
  baseDir: `${__dirname}/`,
  docgenDir: `${__dirname}/.docgen/`,
  combinedContentFile: `${__dirname}/static/{origin}.content.{lang}.json`,
  orderedContentFile: `${__dirname}/static/{origin}.ordered.{lang}.json`,
  menuContentFile: `${__dirname}/static/{origin}.menu.{lang}.json`,

  originContentDir: `${__dirname}/content/`,
  splitString: ';examplearea',
  ignoreFiles: [ '.DS_Store' ],  
}