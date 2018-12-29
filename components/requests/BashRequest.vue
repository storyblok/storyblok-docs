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
-H "Content-Type: application/json" \\
-H "Authorization: YOUR_OAUTH_TOKEN" \\
-d ${JSON.stringify(JSON.stringify(this.requestObject))}`
        break;
        case 'DELETE':
        return `curl "${this.url}" \\ 
-X DELETE \\
-H "Authorization: YOUR_OAUTH_TOKEN" \\
-d ""`
        break;
        case 'PUT':
        return `curl "${this.url}" \\ 
-X PUT \\
-H "Authorization: YOUR_OAUTH_TOKEN" \\
-H "Content-Type: application/json" \\
-d ${JSON.stringify(JSON.stringify(this.requestObject))}`
        break;
        case 'GETOAUTH':
          return `curl "${this.url}" \\
-X GET \\
-H "Authorization: YOUR_OAUTH_TOKEN" \\
-H "Content-Type: application/json"`
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
