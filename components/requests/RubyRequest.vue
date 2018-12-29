<script>
import RequestMixin from "@/components/requests/RequestMixin"

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      switch (this.httpMethod) {
        case "POST":
          return `require 'uri'
require 'net/http'

url = URI("${this.url}")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Content-Type"] = "application/json"
request["Authorization"] = 'YOUR_OAUTH_TOKEN'
request.body = ${JSON.stringify(JSON.stringify(this.requestObject))}

response = http.request(request)
puts response.read_body`;
          break
        default:
          return `require 'uri'
require 'net/http'

url = URI("${this.url}")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body`;
          break
      }
    }
  }
}
</script>

