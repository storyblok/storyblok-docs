module.exports = {
  defaultLanguage: `en`,
  splitString: ';examplearea',
  availableRoutesFile: `${__dirname}/routes.json`,
  contentInputFolder: `${__dirname}/content/`,
  sectionsOutputFile: `${__dirname}/static/{origin}.ordered.{lang}.json`,
  menuOutputFile: `${__dirname}/static/{origin}.menu.{lang}.json`
}