<script>
import RequestMixin from '@/components/requests/RequestMixin'

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      return `curl "${this.url}" -X GET \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json"`
    }
  }
}
</script>
