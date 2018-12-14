<script>
import Vue from 'vue'
import RequestJavaScript from '@/components/requests/RequestJavaScript'
import RequestBash from '@/components/requests/RequestBash'
import RequestPhp from '@/components/requests/RequestPhp'
import RequestJava from '@/components/requests/RequestJava'
import RequestCsharp from '@/components/requests/RequestCsharp'
import RequestSwift from '@/components/requests/RequestSwift'

export default {
  javascript: Vue.extend(RequestJavaScript),
  bash: Vue.extend(RequestBash),
  php: Vue.extend(RequestPhp),
  java: Vue.extend(RequestJava),
  csharp: Vue.extend(RequestCsharp),
  swift: Vue.extend(RequestSwift)
}
</script>
