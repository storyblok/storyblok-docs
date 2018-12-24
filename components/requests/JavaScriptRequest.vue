<script>
import RequestMixin from '@/components/requests/RequestMixin'

export default {
  mixins: [RequestMixin],  
  computed: {
    rendered() {
      return `// use the universal js client to perform the request
Storyblok.get('${this.path}', ${this.paramsAsJson})
  .then(response => {
    console.log(response)
  }).catch(error => { 
    console.log(error)
  })`
    }
  }
}
</script>
