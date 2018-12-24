<script>
import Vue from 'vue'
import JavaScriptRequest from '@/components/requests/JavaScriptRequest'
import BashRequest from '@/components/requests/BashRequest'
import PhpRequest from '@/components/requests/PhpRequest'
import JavaRequest from '@/components/requests/JavaRequest'
import CsharpRequest from '@/components/requests/CsharpRequest'
import SwiftRequest from '@/components/requests/SwiftRequest'
import RubyRequest from '@/components/requests/RubyRequest'

export default {
  javascript: Vue.extend(JavaScriptRequest),
  bash: Vue.extend(BashRequest),
  php: Vue.extend(PhpRequest),
  java: Vue.extend(JavaRequest),
  csharp: Vue.extend(CsharpRequest),
  swift: Vue.extend(SwiftRequest),
  ruby: Vue.extend(RubyRequest),
}
</script>
