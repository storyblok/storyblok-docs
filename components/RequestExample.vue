<template>
  <div v-html="applyFormat(url)"></div>
</template>

<script>
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

marked.setOptions({
  highlight: (code, lang) => {
		return Prism.highlight(code, Prism.languages[lang], lang)
	}
})


// needed to stop Prism to automatically highlight everything that is already highlighted:
// https://github.com/PrismJS/prism/issues/765#issuecomment-139043403
// https://github.com/PrismJS/prism/pull/1087#issuecomment-274952728
if (window.Prism) {
  document.removeEventListener('DOMContentLoaded', Prism.highlightAll)
} else {
  window.Prism = { manual: true }
}

export default {
  data() {
    return {
      base: 'https://api.storyblok.com/v1'
    }
  },
  computed: {
    type() {
      return this.$store.state.codelang 
    }
  },
  props: {
    url: String
  },
  methods: {
    applyFormat(url) {
      // eslint-disable-next-line
      let code = '```' + this.type + '\n'

      switch (this.type) {
        case 'bash':
          code += `curl "${url}" -X GET \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json"`
        break
        case 'javascript':
          code += `// use the universal js client to perform the request
Storyblok.get('${this.getPathFromUrl()}', ${this.getParamsAsJson()})
  .then(response => {
    console.log(response)
  }).catch(error => { 
    console.log(error)
  })
`
        break
        case 'php':
          code += `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "${url}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`
        break
        case 'java':
          code += `HttpResponse<String> response = Unirest.get("${url}")
  .asString();`
        break
        case 'csharp':
          code += `var client = new RestClient("${url}");
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);`
        break
        case 'swift':
          code += `import Foundation

let request = NSMutableURLRequest(url: NSURL(string: "${url}")! as URL,
                    cachePolicy: .useProtocolCachePolicy, timeoutInterval: 10.0)
request.httpMethod = "GET"

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()`
        break
      }

      code += '\n```'

      return marked(code)
    },
    getQueryParameterFromUrl(name) {
      if (typeof URLSearchParams !== 'undefined') {
        const urlParams = new URLSearchParams(this.url.substring(this.url.indexOf('?')))
        return urlParams.get(name)
      } 

      name = name.replace(/[[\]]/g, '\\$&')
      let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(this.url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    },
    getPathFromUrl() {
      let url = this.url.replace(this.base, '')
      return url.substring(url.indexOf('/') + 1, url.indexOf('?'))
    },
    getParamsAsJson() {
      let query = this.url.substring(this.url.indexOf('?') + 1)

      let re = /([^&=]+)=?([^&]*)/g;
      let decodeRE = /\+/g;

      let decode = (str) => {
          return decodeURIComponent(str.replace(decodeRE, " "));
      };

      let params = {};
      let e = re.exec(query)
      while (e) {
          let k = decode(e[1]), v = decode(e[2]);
          if (k.substring(k.length - 2) === '[]') {
              k = k.substring(0, k.length - 2);
              (params[k] || (params[k] = [])).push(v);
          }
          else params[k] = v;
          e = re.exec(query)
      }

      let assign = (obj, keyPath, value) => {
          let lastKeyIndex = keyPath.length - 1;
          for (let i = 0; i < lastKeyIndex; ++i) {
              let key = keyPath[i];
              if (!(key in obj))
                  obj[key] = {}
              obj = obj[key];
          }
          obj[keyPath[lastKeyIndex]] = value;
      }

      for (let prop in params) {
          let structure = prop.split('[');
          if (structure.length > 1) {
              let levels = [];
              structure.forEach((item) => {
                let key = item.replace(/[?[\]\\ ]/g, '');
                levels.push(key);
              });
              assign(params, levels, params[prop]);
              delete(params[prop]);
          }
      }
      delete params.token 
      return JSON.stringify(params, null, 2)
    }
  }
}
</script>