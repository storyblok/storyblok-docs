import marked from 'marked'
import Prism from 'prismjs/components/prism-core'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-ruby'

marked.setOptions({
  highlight: (code, lang) => {
		return Prism.highlight(code, Prism.languages[lang], lang)
	}
})

if (process.client) {
  // needed to stop Prism to automatically highlight everything that is already highlighted:
  // https://github.com/PrismJS/prism/issues/765#issuecomment-139043403
  // https://github.com/PrismJS/prism/pull/1087#issuecomment-274952728
  if (window.Prism) {
    document.removeEventListener('DOMContentLoaded', Prism.highlightAll)
  } else {
    window.Prism = { manual: true }
  }
}

export default marked