<script>
import RequestMixin from "@/components/requests/RequestMixin"

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      switch (this.httpMethod) {
        case "POST":
          return `var client = new RestClient("${this.url}");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Authorization", "YOUR_OAUTH_TOKEN");
request.AddParameter("application/json", ${JSON.stringify(JSON.stringify(this.requestObject))}, ParameterType.RequestBody);
IRestResponse response = client.Execute(request);`;
          break
        case "PUT":
          return `var client = new RestClient("${this.url}");
var request = new RestRequest(Method.PUT);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Authorization", "YOUR_OAUTH_TOKEN");
request.AddParameter("application/json", ${JSON.stringify(JSON.stringify(this.requestObject))}, ParameterType.RequestBody);
IRestResponse response = client.Execute(request);`;
          break
        case "DELETE":
          return `var client = new RestClient("${this.url}");
var request = new RestRequest(Method.DELETE);
request.AddHeader("Content-Type", "application/json");
request.AddHeader("Authorization", "YOUR_OAUTH_TOKEN");
IRestResponse response = client.Execute(request);`;
          break
        case "GETOAUTH":
          return `var client = new RestClient("${this.url}");
var request = new RestRequest(Method.GET);
request.AddHeader("Authorization", "YOUR_OAUTH_TOKEN");
IRestResponse response = client.Execute(request);`;
          break
        default:
          return `var client = new RestClient("${this.url}");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);`;
          break
      }
    }
  }
}
</script>
