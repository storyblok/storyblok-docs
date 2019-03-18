<template>
  <div v-html="output('python')"></div>
</template>

<script>
import RequestMixin from "@/components/requests/RequestMixin"

export default {
  mixins: [RequestMixin],
  computed: {
    request() {
      let queryParams = this.queryParams
      switch (this.httpMethod) {
        case "POST":
          return `import requests

url = "${this.urlWithoutParams}"

querystring = ${JSON.stringify(queryParams)}

payload = ${JSON.stringify(JSON.stringify(this.requestObject))}
headers = {
  'Content-Type': "application/json",
  'Authorization': "YOUR_OAUTH_TOKEN"
}

response = requests.request("POST", url, data=payload, headers=headers, params=querystring)

print(response.text)`
          break;
        case "PUT":
          return `import requests

url = "${this.urlWithoutParams}"

querystring = ${JSON.stringify(queryParams)}

payload = ${JSON.stringify(JSON.stringify(this.requestObject))}
headers = {
  'Content-Type': "application/json",
  'Authorization': "YOUR_OAUTH_TOKEN"
}

response = requests.request("PUT", url, data=payload, headers=headers, params=querystring)

print(response.text)`
          break;
        case "DELETE":
          return `import requests

url = "${this.urlWithoutParams}"

querystring = ${JSON.stringify(queryParams)}

payload = ${JSON.stringify(JSON.stringify(this.requestObject))}
headers = {
  'Content-Type': "application/json",
  'Authorization': "YOUR_OAUTH_TOKEN"
}

response = requests.request("DELETE", url, data=payload, headers=headers, params=querystring)

print(response.text)`
        break;
        case "GETOAUTH":
          return `import requests

url = "${this.urlWithoutParams}"

querystring = ${JSON.stringify(queryParams)}

payload = ""
headers = {
  'Content-Type': "application/json",
  'Authorization': "YOUR_OAUTH_TOKEN"
}

response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

print(response.text)`
        break;
        default:
          return `import requests

url = "${this.urlWithoutParams}"

querystring = ${JSON.stringify(queryParams)}

payload = ""
headers = {}

response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

print(response.text)`
          break
      }
    }
  }
}
</script>
