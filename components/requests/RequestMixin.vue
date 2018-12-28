<script>
export default {
  props: {
    url: String,
    requestObject: Object,
    httpMethod: String,
    oauthToken: String,
    path: String,
    params: Object
  },
  computed: {
    paramsAsJson() {
      return JSON.stringify(this.params, null, 2)
    },
    rendered() {
      return `${this.path}`
    }
  }
}
</script>
