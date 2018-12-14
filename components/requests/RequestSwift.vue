<script>
import RequestMixin from '@/components/requests/RequestMixin'

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      return `import Foundation

let request = NSMutableURLRequest(url: NSURL(string: "${this.url}")! as URL,
                    cachePolicy: .useProtocolCachePolicy, timeoutInterval: 10.0)
request.httpMethod = "GET"

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()`
    }
  }
}
</script>
