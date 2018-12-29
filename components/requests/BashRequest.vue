<script>
import RequestMixin from '@/components/requests/RequestMixin'

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      switch (this.httpMethod) {
        case 'POST':
        return `curl "${this.url}" \\
-X POST \\
-H 'Content-Type: application/json' \\
-H 'Authorization: YOUR_OAUTH_TOKEN' \\
-d '${JSON.stringify(this.requestObject, null, 2)}'`
        break;
        case 'DELETE':
        return `curl "${this.url}" \\ 
-X DELETE \\
-H 'Authorization: YOUR_OAUTH_TOKEN' \\
-d ''`
        break;
        default:
          return `curl "${this.url}" \\
-X GET \\
-H "Accept: application/json" \\
-H "Content-Type: application/json"`
        break;
      }
    }
  }
}
</script>
