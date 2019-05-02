<template>
  <div v-html="output('php')"></div>
</template>

<script>
import RequestMixin from "@/components/requests/RequestMixin"
import sdk from "@/sdks/php/methods"

export default {
  mixins: [RequestMixin],
  computed: {
    request() {
      if (sdk[(this.httpMethod || 'GET') + ':' + this.url]) {
        return `$client = new \\Storyblok\\Client('YOUR_TOKEN');

${sdk[(this.httpMethod || 'GET') + ':' + this.url]}`;
      }

      let queryParams = JSON.stringify(this.queryParams, null, 2)
        .replace(new RegExp(':', 'g'), ' => ')
        .replace(new RegExp('{', 'g'), '[')
        .replace(new RegExp('}', 'g'), ']')
      let requestObject = ''

      if (this.requestObject) {
        requestObject = JSON.stringify(this.requestObject, null, 2)
          .replace(new RegExp(':', 'g'), ' => ')
          .replace(new RegExp('{', 'g'), '[')
          .replace(new RegExp('}', 'g'), ']')
      }

      switch (this.httpMethod) {
        case "POST":
          return `$client = new \\Storyblok\\ManagementClient('YOUR_OAUTH_TOKEN');

$payload = ${requestObject};

$client->post('${this.path}', $payload)->getBody();`
          break;
        case "PUT":
          return `$client = new \\Storyblok\\ManagementClient('YOUR_OAUTH_TOKEN');

$payload = ${requestObject};

$client->put('${this.path}', $payload)->getBody();`
          break;
        case "DELETE":
          return `$client = new \\Storyblok\\ManagementClient('YOUR_OAUTH_TOKEN');

$client->delete('${this.path}')->getBody();`
        break;
        case "GETOAUTH":
          return `$client = new \\Storyblok\\ManagementClient('YOUR_OAUTH_TOKEN');

$client->get('${this.path}'${queryParams === '[]' ? '' : ', ' + queryParams})->getBody();`
        break;
        default:
          return `$client = new \\Storyblok\\ManagementClient('YOUR_OAUTH_TOKEN');

$client->get('${this.path}'${queryParams === '[]' ? '' : ', ' + queryParams})->getBody();`
          break
      }
    }
  }
}
</script>
