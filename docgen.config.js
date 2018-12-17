module.exports = {
  baseDir: `${__dirname}/`,
  docgenDir: `${__dirname}/.docgen/`,
  originContentDir: `${__dirname}/content/`,
  parsedContentDir: `${__dirname}/.docgen/content/`,
  combinedContentFile: `${__dirname}/.docgen/content.json`,
  orderedContentFile: `${__dirname}/.docgen/ordered.json`,
  menuContentFile: `${__dirname}/.docgen/menu.json`,
  splitString: ';examplearea',
  languages: ['en', 'de'],
  ignoreFiles: [ '.DS_Store' ],  
}