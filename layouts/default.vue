<template>
  <div class="docs">
    <SvgSprite/>
    <WebsiteHeader/>
    <TopHeader/>
    <SidebarNavigation/>
    <nuxt/>
  </div>
</template>

<script>
import SvgSprite from '@/components/SvgSprite'
import SidebarNavigation from '@/components/SidebarNavigation'
import TopHeader from '@/components/TopHeader'
import WebsiteHeader from '@/components/WebsiteHeader'

export default {
  components: {
    WebsiteHeader,
    SidebarNavigation,
    TopHeader,
    SvgSprite
  },
  mounted() {
    if (typeof window.localStorage !== 'undefined' && typeof window.localStorage.codelang !== 'undefined') {
      this.$store.commit('SET_CODELANG', window.localStorage.codelang)
    }
  }
}
</script>


<style lang="scss">
body {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: $content-background;
  color: $content-text-color;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-transform: none;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

h1, h2, h3, h4, h5 {
  font-family: $brand-font;
}

h2 {
  font-size: 1.2em;
}

img {
  max-width: 100%;
} 

a {
  color: $brand-highlight;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
}


pre {
    padding: 20px 20px;
    background: $brand-background-dark;
    border-radius: 5px;
    overflow-x: scroll;
  }

code[class*="language-"],
pre[class*="language-"] {
  color: $brand-background-light;
  text-shadow: 0px 1px rgba(0,0,0,0.3);
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  font-size: 14px;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;	
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: $brand-background-dark;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #f8f8f2;
}

.namespace {
  opacity: .7;
}

.token.property,
.token.tag {
  color: #f92672;
}

.token.boolean,
.token.number{
  color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string {
  color: #a6e22e;
}


.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #f8f8f2;
}

.token.atrule,
.token.attr-value
{
  color: #e6db74;
}


.token.keyword{
color: #f92672;
}

.token.regex,
.token.important {
  color: #fd971f;
}

.token.important {
  font-weight: bold;
}

.token.entity {
  cursor: help;
}

.docs {
  position: relative;
}
</style>
