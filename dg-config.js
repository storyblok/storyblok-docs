module.exports = {
  defaultLanguage: `v1`,
  splitString: ';examplearea',
  availableRoutesFile: `${__dirname}/routes.json`,
  contentInputFolder: `${__dirname}/content/`,
  menuInputFile: `${__dirname}/content/{origin}.{lang}.json`,
  sectionsOutputFile: `${__dirname}/static/{origin}.methods.{lang}.json`,
  menuOutputFile: `${__dirname}/static/{origin}.menu.{lang}.json`
}
