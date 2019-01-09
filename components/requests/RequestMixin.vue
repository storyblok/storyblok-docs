<script>
export default {
  data() {
    return {
      bases: ['https://api.storyblok.com/v1', 'https://mapi.storyblok.com/v1'],
    }
  },
  props: {
    url: String,
    requestObject: Object,
    httpMethod: String
  },
  computed: {
    path() {
      let url = this.url
      for (let index = 0, max = this.bases.length; index < max; index++) {
        const base = this.bases[index];
        url = url.replace(base, '')
      }
      if(this.url.indexOf('?') <= 0) {
        return url.substring(url.indexOf('/') + 1, url.length)
      } else {
        return url.substring(url.indexOf('/') + 1, url.indexOf('?'))
      }
    },
    queryParams() {
      if(this.url.indexOf('?') <= 0) return {}
      let query = this.url.substring(this.url.indexOf('?') + 1)

      let re = /([^&=]+)=?([^&]*)/g
      let decodeRE = /\+/g

      let decode = str => {
        return decodeURIComponent(str.replace(decodeRE, ' '))
      }

      let typing = str => {
        if (str === 'true') {
          return true
        } else if (str === 'false') {
          return false
        } else if (str === 'null') {
          return null
        } else if (+str === +str) {
          return +str
        } else {
          return str
        }
      }

      let params = {}
      let e = re.exec(query)
      while (e) {
        let k = decode(e[1])
        let v = decode(e[2])
        if (k.substring(k.length - 2) === '[]') {
          k = k.substring(0, k.length - 2)
          (params[k] || (params[k] = [])).push(v)
        } else {
          params[k] = typing(v)
        }
        e = re.exec(query)
      }

      let assign = (obj, keyPath, value) => {
        let lastKeyIndex = keyPath.length - 1
        for (let i = 0; i < lastKeyIndex; ++i) {
          let key = keyPath[i]
          if (!(key in obj)) {
            obj[key] = {}
          }
          obj = obj[key]
        }
        obj[keyPath[lastKeyIndex]] = value
      }

      for (let prop in params) {
        let structure = prop.split('[')
        if (structure.length > 1) {
          let levels = []
          structure.forEach(item => {
            let key = item.replace(/[?[\]\\ ]/g, '')
            levels.push(key)
          })
          assign(params, levels, params[prop])
          delete params[prop]
        }
      }
      delete params.token
      return params
    },
    urlWithoutParams() {
      if(this.url.indexOf('?') <= 0) return this.url
      return this.url.substring(0, this.url.indexOf('?'))
    },
    rendered() {
      return `${this.path}`
    }
  }
}
</script>
