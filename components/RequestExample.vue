<template>
  <div v-html="applyFormat(url)"></div>
</template>

<script>
import marked from '@/plugins/markedWithPrism'
import RequestTypes from '@/components/requests/RequestTypes'

export default {
  data() {
    return {
      bases: ['https://api.storyblok.com/v1', 'https://mapi.storyblok.com'],
      code: {
        javascript: '',
        bash: '',
        php: '',
        java: '',
        csharp: '',
        swift: '',
        ruby: ''
      }
    }
  },
  props: {
    url: String,
    httpMethod: String,
    requestObject: Object,
    oauthToken: String
  },
  computed: {
    propsData() {
      return {
        url: this.url,
        httpMethod: this.httpMethod,
        oauthToken: this.oauthToken,
        requestObject: this.requestObject,
        path: this.getPathFromUrl(),
        queryParams: this.getQueryParamsAsJson()
      }
    },
    codelang() {
      return this.$store.state.codelang
    }
  },
  methods: {
    applyFormat(url) {
      if (typeof this.code[this.codelang] === 'undefined') {
        return `Can't handle that technology.`
      }

      if (this.code[this.codelang].length != 0) {
        return this.code[this.codelang]
      }

      let code = '```' + this.codelang + '\n'
      code += new RequestTypes[this.codelang]({ propsData: this.propsData }).rendered
      code += '\n```'

      this.code[this.codelang] = marked(code)

      return this.code[this.codelang]
    },
    getQueryParameterFromUrl(name) {
      if (typeof URLSearchParams !== 'undefined') {
        const urlParams = new URLSearchParams(
          this.url.substring(this.url.indexOf('?'))
        )
        return urlParams.get(name)
      }

      name = name.replace(/[[\]]/g, '\\$&')
      let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(this.url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    },
    getPathFromUrl() {
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
    getQueryParamsAsJson() {
      if(this.url.indexOf('?') <= 0) return {}
      let query = this.url.substring(this.url.indexOf('?') + 1)

      let re = /([^&=]+)=?([^&]*)/g
      let decodeRE = /\+/g

      let decode = str => {
        return decodeURIComponent(str.replace(decodeRE, ' '))
      }

      let params = {}
      let e = re.exec(query)
      while (e) {
        let k = decode(e[1]),
          v = decode(e[2])
        if (k.substring(k.length - 2) === '[]') {
          k = k.substring(0, k.length - 2)
          (params[k] || (params[k] = [])).push(v)
        } else params[k] = v
        e = re.exec(query)
      }

      let assign = (obj, keyPath, value) => {
        let lastKeyIndex = keyPath.length - 1
        for (let i = 0; i < lastKeyIndex; ++i) {
          let key = keyPath[i]
          if (!(key in obj)) obj[key] = {}
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
    }
  }
}
</script>