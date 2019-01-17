<template>
  <div class="request-example">
    <BashRequest v-show="technology == 'bash'" v-bind=propsData></BashRequest>
    <JavaScriptRequest v-show="technology == 'javascript'" v-bind=propsData></JavaScriptRequest>
    <PhpRequest v-show="technology == 'php'" v-bind=propsData></PhpRequest>
    <JavaRequest v-show="technology == 'java'" v-bind=propsData></JavaRequest>
    <CsharpRequest v-show="technology == 'csharp'" v-bind=propsData></CsharpRequest>
    <SwiftRequest v-show="technology == 'swift'" v-bind=propsData></SwiftRequest>
    <RubyRequest v-show="technology == 'ruby'" v-bind=propsData></RubyRequest>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    httpMethod: String,
    requestObject: Object
  },
  components: {
    BashRequest: () => import('@/components/requests/BashRequest'),
    JavaScriptRequest: () => import('@/components/requests/JavaScriptRequest'),
    PhpRequest: () => import('@/components/requests/PhpRequest'),
    JavaRequest: () => import('@/components/requests/JavaRequest'),
    CsharpRequest: () => import('@/components/requests/CsharpRequest'),
    SwiftRequest: () => import('@/components/requests/SwiftRequest'),
    RubyRequest: () => import('@/components/requests/RubyRequest'),
  },
  computed: {
    propsData() {
      return {
        url: this.url,
        httpMethod: this.httpMethod,
        requestObject: this.requestObject
      }
    },
    technology() {
      return this.$store.state.technology
    }
  }
}
</script>