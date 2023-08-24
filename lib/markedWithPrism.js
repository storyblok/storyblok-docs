import { marked } from "marked";
import Prism from "prismjs/components/prism-core";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-java";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-python";

marked.setOptions({
  highlight: (code, lang) => {
    return Prism.highlight(code, Prism.languages[lang], lang);
  },
});

export default marked;
