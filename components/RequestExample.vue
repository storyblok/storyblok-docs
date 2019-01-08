<template>
  <div v-html="applyFormat(url)"></div>
</template>

<script>
import marked from '@/lib/markedWithPrism'
import RequestTypes from '@/components/requests/RequestTypes'

export default {
  data() {
    return {
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
    requestObject: Object
  },
  computed: {
    propsData() {
      return {
        url: this.url,
        httpMethod: this.httpMethod,
        requestObject: this.requestObject
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
    }
  }
}
</script>