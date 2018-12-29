<script>
import RequestMixin from "@/components/requests/RequestMixin";

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
      switch (this.httpMethod) {
        case 'POST':
          return  `// use the universal js client to perform the request
Storyblok.post('${this.path}', ${JSON.stringify(this.requestObject, null, 2)}).then(response => {
  console.log(response)
}).catch(error => { 
  console.log(error)
})`;
        break;
        case 'PUT':
          return  `// use the universal js client to perform the request
Storyblok.put('${this.path}', ${JSON.stringify(this.requestObject, null, 2)}).then(response => {
  console.log(response)
}).catch(error => { 
  console.log(error)
})`;
        break;
        case 'DELETE':
          return  `// use the universal js client to perform the request
Storyblok.delete('${this.path}').then(response => {
  console.log(response)
}).catch(error => { 
  console.log(error)
})`;
        break;
        default:
          return `// use the universal js client to perform the request
Storyblok.get('${this.path}', ${JSON.stringify(this.queryParams, null, 2)})
.then(response => {
  console.log(response)
}).catch(error => { 
  console.log(error)
})`;
          break;
      }
    }
  }
};
</script>
