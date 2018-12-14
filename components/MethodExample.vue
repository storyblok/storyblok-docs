<template>
  <div class="method-example">
    <div class="method-example__body" v-if=!loaded>
      <FakeItem/>
    </div>
    <div :id="methodId"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import FakeItem from '@/components/FakeItem'

export default {
  computed: {
    methodId() {
      return this.method.path.split('/').join('');
    }
  },
  props: {
    method: Object
  },
  data() {
    return {
      loaded: false,
      childInstance: null
    }
  },
  components: {
    FakeItem
  },
  mounted() {
    let DynamicContent = Vue.extend({
      template: `<div class="method-example__body">${this.method.example}</div>`,
      methods: {
        // formats date to YYYY-MM-DD HH:MM
        formatDate(date) {
          return date.getFullYear().toString() + "-"+((date.getMonth()+1).toString().length==2?(date.getMonth()+1).toString():"0"+(date.getMonth()+1).toString())+"-"+(date.getDate().toString().length==2?date.getDate().toString():"0"+date.getDate().toString())+" "+(date.getHours().toString().length==2?date.getHours().toString():"0"+date.getHours().toString())+":"+((parseInt(date.getMinutes()/5)*5).toString().length==2?(parseInt(date.getMinutes()/5)*5).toString():"0"+(parseInt(date.getMinutes()/5)*5).toString())
        }
      },
      mounted() {
        this.$parent.loaded = true
      }
    })
    this.childInstance = new DynamicContent({ el: `#${this.methodId}`, store: this.$store, parent: this })
  }
}
</script>

<style lang="scss">
.method-example {
  background: #2b3133;
  border-top: 1px solid #272b2d;
  color: #dde4e8;
  flex: 1;

  table {
    width: 100%;
    border: 1px solid #33373a;
    border-collapse: collapse;
    th, td {
      border: 1px solid #33373a;
      padding: 7px;
      font-size: 13px;
      text-align: left;
    }
    thead tr {
      background: #2b3133;
    }
    tbody {
      tr:nth-child(odd) {
        background: #33373a;
      }
      tr:nth-child(even) {
        background: #2b3133;
      }
    }
  }
}

.method-example__body {
  padding: 40px 40px 20px;
}

pre {
    padding: 20px 20px;
    background: #272b2d;
    border-radius: 5px;
    overflow-x: scroll;
  }

code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
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
  background: #272b2d;
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
</style>
