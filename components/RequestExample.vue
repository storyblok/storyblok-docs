<template>
  <div class="request-example">
    <BashRequest v-show="codelang == 'bash'" v-bind=propsData></BashRequest>
    <JavaScriptRequest v-show="codelang == 'javascript'" v-bind=propsData></JavaScriptRequest>
    <PhpRequest v-show="codelang == 'php'" v-bind=propsData></PhpRequest>
    <JavaRequest v-show="codelang == 'java'" v-bind=propsData></JavaRequest>
    <CsharpRequest v-show="codelang == 'csharp'" v-bind=propsData></CsharpRequest>
    <SwiftRequest v-show="codelang == 'swift'" v-bind=propsData></SwiftRequest>
    <RubyRequest v-show="codelang == 'ruby'" v-bind=propsData></RubyRequest>
  </div>
</template>

<script>
import BashRequest from '@/components/requests/BashRequest'
import JavaScriptRequest from '@/components/requests/JavaScriptRequest'
import PhpRequest from '@/components/requests/PhpRequest'
import JavaRequest from '@/components/requests/JavaRequest'
import CsharpRequest from '@/components/requests/CsharpRequest'
import SwiftRequest from '@/components/requests/SwiftRequest'
import RubyRequest from '@/components/requests/RubyRequest'

export default {
  props: {
    url: String,
    httpMethod: String,
    requestObject: Object
  },
  components: {
    BashRequest,
    JavaScriptRequest,
    PhpRequest,
    JavaRequest,
    CsharpRequest,
    SwiftRequest,
    RubyRequest
  },
  computed: {
    propsData() {
      return {
        url: this.url,
        httpMethod: this.httpMethod,
        requestObject: this.requestObject
      }
    },
    codelang() {
      return this.$store.state.codelang
    }
  }
}
</script>