<script>
export default {
  props: {
    url: String,
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
