<template>
  <div v-html="output('ruby')"></div>
</template>

<script>
import RequestMixin from "@/components/requests/RequestMixin"
import sdk from "@/sdks/ruby/methods"

export default {
  mixins: [RequestMixin],
  computed: {
    request() {
      if (sdk[(this.httpMethod || 'GET') + ':' + this.url]) {
        return `require 'storyblok'
client = Storyblok::Client.new(token: 'YOUR_TOKEN')

${sdk[(this.httpMethod || 'GET') + ':' + this.url]}`;
      }

      let queryParams = ''

      if (JSON.stringify(this.queryParams) != '{}') {
        queryParams = `, {:params => ${JSON.stringify(this.queryParams, null, 2).replace(new RegExp(':', 'g'), ' => ')}}`
      }

      switch (this.httpMethod) {
        case "POST":
          return `require 'storyblok'
client = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')

payload = ${JSON.stringify(this.requestObject, null, 2).replace(new RegExp(':', 'g'), ' => ')}

client.post('${this.path}', payload)`;
          break
        case "PUT":
          return `require 'storyblok'
client = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')

payload = ${JSON.stringify(this.requestObject, null, 2).replace(new RegExp(':', 'g'), ' => ')}

client.put('${this.path}', payload)`;
          break
        case "DELETE":
          return `require 'storyblok'
client = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')

client.delete('${this.path}')`;
          break
        case "GETOAUTH":
          return `require 'storyblok'
client = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')

client.get('${this.path}'${queryParams})`;
          break
        default:
          return `require 'storyblok'
client = Storyblok::Client.new(oauth_token: 'YOUR_OAUTH_TOKEN')

client.get('${this.path}'${queryParams})`;
          break
      }
    }
  }
}
</script>

