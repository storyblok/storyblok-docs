<template>
  <div v-html="output('swift')"></div>
</template>

<script>
import RequestMixin from "@/components/requests/RequestMixin";

export default {
  mixins: [RequestMixin],
  computed: {
    request() {
      switch (this.httpMethod) {
        case "POST":
        return `import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "YOUR_OAUTH_TOKEN"
]

let postData = NSData(data: "${JSON.stringify(this.requestObject, null, 2)}".data(using: String.Encoding.utf8)!)

let request = NSMutableURLRequest(url: NSURL(string: "${this.url}")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

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
          break
        case "PUT":
        return `import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "YOUR_OAUTH_TOKEN"
]

let postData = NSData(data: "${JSON.stringify(this.requestObject, null, 2)}".data(using: String.Encoding.utf8)!)

let request = NSMutableURLRequest(url: NSURL(string: "${this.url}")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PUT"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

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
          break
        case "DELETE":
        return `import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "YOUR_OAUTH_TOKEN"
]

let request = NSMutableURLRequest(url: NSURL(string: "${this.url}")! as URL,
                    cachePolicy: .useProtocolCachePolicy, timeoutInterval: 10.0)
request.httpMethod = "DELETE"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()`;
          break
        case "GETOAUTH":
        return `import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "YOUR_OAUTH_TOKEN"
]

let request = NSMutableURLRequest(url: NSURL(string: "${this.url}")! as URL,
                    cachePolicy: .useProtocolCachePolicy, timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()`;
          break
        default:
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

dataTask.resume()`;
          break
      }
    }
  }
}
</script>
