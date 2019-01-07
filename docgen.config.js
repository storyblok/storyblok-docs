module.exports = {
  baseDir: `${__dirname}/`,
  docgenDir: `${__dirname}/.docgen/`,
  combinedContentFile: `${__dirname}/assets/{origin}.content.{lang}.json`,
  orderedContentFile: `${__dirname}/assets/{origin}.ordered.{lang}.json`,
  menuContentFile: `${__dirname}/assets/{origin}.menu.{lang}.json`,
  routesFile: `${__dirname}/routes.json`,
  originContentDir: `${__dirname}/content/`,
  splitString: ';examplearea',
  ignoreFiles: [ '.DS_Store' ],
  
}