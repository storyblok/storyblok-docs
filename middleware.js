import rules from './redirects'

export default (req, res, next) => {
  const path = req._parsedUrl.path
  if(rules[path]) {
    const rule = rules[path]
    res.writeHead(rule.code, {
      location: rule.dst
    })
    return res.end()
  }
  next()
}
