<script>
import RequestMixin from '@/components/requests/RequestMixin'

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      return `HttpResponse<String> response = Unirest.get("${this.url}")
  .asString();`
    }
  }
}
</script>
