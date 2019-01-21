module.exports = {
  baseDir: `${__dirname}/`,
  docgenDir: `${__dirname}/.docgen/`,
  orderedContentFile: `${__dirname}/static/{origin}.ordered.{lang}.json`,
  menuContentFile: `${__dirname}/static/{origin}.menu.{lang}.json`,
  routesFile: `${__dirname}/routes.json`,
  originContentDir: `${__dirname}/content/`,
  splitString: ';examplearea',
  ignoreFiles: [ '.DS_Store' ], 
}