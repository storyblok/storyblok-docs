module.exports = {
  originContentDir: `${__dirname}/content/`,
  docgenDir: `${__dirname}/.docgen/`,
  parsedContentDir: `${__dirname}/.docgen/content/`,
  combinedContentFile: `${__dirname}/.docgen/content.json`,
  orderedContentFile: `${__dirname}/.docgen/ordered.json`,
  menuContentFile: `${__dirname}/.docgen/menu.json`,
  languages: ['en', 'de'],
  ignoreFiles: [ '.DS_Store' ],  
}