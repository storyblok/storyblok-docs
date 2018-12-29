<script>
export default {
  props: {
    url: String,
    requestObject: Object,
    httpMethod: String,
    oauthToken: String,
    path: String,
    queryParams: Object
  },
  computed: {
    queryParamsAsJson() {
      return JSON.stringify(this.queryParams, null, 2)
    },
    rendered() {
      return `${this.path}`
    }
  }
}
</script>
