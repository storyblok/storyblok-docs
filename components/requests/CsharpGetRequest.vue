<script>
import RequestMixin from '@/components/requests/RequestMixin'

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      return `var client = new RestClient("${this.url}");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);`
    }
  }
}
</script>
