<script>
import Vue from 'vue'
import JavaScriptGetRequest from '@/components/requests/JavaScriptGetRequest'
import BashGetRequest from '@/components/requests/BashGetRequest'
import PhpGetRequest from '@/components/requests/PhpGetRequest'
import JavaGetRequest from '@/components/requests/JavaGetRequest'
import CsharpGetRequest from '@/components/requests/CsharpGetRequest'
import SwiftGetRequest from '@/components/requests/SwiftGetRequest'
import RubyGetRequest from '@/components/requests/RubyGetRequest'

export default {
  javascript: Vue.extend(JavaScriptGetRequest),
  bash: Vue.extend(BashGetRequest),
  php: Vue.extend(PhpGetRequest),
  java: Vue.extend(JavaGetRequest),
  csharp: Vue.extend(CsharpGetRequest),
  swift: Vue.extend(SwiftGetRequest),
  ruby: Vue.extend(RubyGetRequest),
}
</script>
