<script>
import RequestMixin from '@/components/requests/RequestMixin'

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      switch (this.httpMethod) {
        case 'POST':
        return `HttpResponse<String> response = Unirest.post("${this.url}")
  .header("Content-Type", "application/json")
  .header("Authorization", "YOUR_OAUTH_TOKEN")
  .body(${JSON.stringify(JSON.stringify(this.requestObject))})
  .asString();`
        break;
        default:
      return `HttpResponse<String> response = Unirest.get("${this.url}")
  .asString();`
  break;
      }
    }
  }
}
</script>