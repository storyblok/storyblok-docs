<template>
  <div v-html="applyFormat(url)"></div>
</template>

<script>
import marked from '@/plugins/markedWithPrism'
import GetRequests from '@/components/requests/GetRequests'

export default {
  data() {
    return {
      base: 'https://api.storyblok.com/v1',
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
    httpMethod: String
  },
  computed: {
    propsData() {
      return {
        url: this.url,
        path: this.getPathFromUrl(),
        params: this.getParamsAsJson()
      }
    },
    type() {
      return this.$store.state.codelang
    }
  },
  methods: {
    applyFormat(url) {
      if (typeof this.code[this.type] === 'undefined') {
        return `Can't handle that technology.`
      }

      if (this.code[this.type].length != 0) {
        return this.code[this.type]
      }

      let code = '```' + this.type + '\n'

      switch(httpMethod) {
        case 'POST':

        break;
        default:
          code += new GetRequests[this.type]({ propsData: this.propsData }).rendered
        break;
      }
      
      code += '\n```'

      this.code[this.type] = marked(code)

      return this.code[this.type]
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
      let url = this.url.replace(this.base, '')
      return url.substring(url.indexOf('/') + 1, url.indexOf('?'))
    },
    getParamsAsJson() {
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