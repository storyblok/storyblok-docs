<template>
  <div class="method-example">
    <div class="method-body">
      <component :is=exampleComponentName></component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import RequestExample from '@/components/RequestExample'

export default {
  props: {
    method: Object
  },
  computed: {
    exampleComponentName() {
      return this.method.path.split('/').join('-') + '-example';
    }
  },
  components: {
    RequestExample
  },
  created() {
    Vue.component(this.exampleComponentName, {
      template: `<div>${this.method.example}</div>`,
        methods: {
        // formats date to YYYY-MM-DD HH:MM
        formatDate(date) {
          return date.getFullYear().toString() + "-"+((date.getMonth()+1).toString().length==2?(date.getMonth()+1).toString():"0"+(date.getMonth()+1).toString())+"-"+(date.getDate().toString().length==2?date.getDate().toString():"0"+date.getDate().toString())+" "+(date.getHours().toString().length==2?date.getHours().toString():"0"+date.getHours().toString())+":"+((parseInt(date.getMinutes()/5)*5).toString().length==2?(parseInt(date.getMinutes()/5)*5).toString():"0"+(parseInt(date.getMinutes()/5)*5).toString())
        }
      },
      components: {
        RequestExample
      }
    })
  }
}
</script>

<style lang="scss">
.method-example {
  color: $example-text-color;
  
  background: $example-background;
  border-top: 1px solid $example-background-secondary;
  flex: 1;

  a {
    color: $example-link-color;
  }

  table {
    border: 1px solid $example-background-secondary;
    th, td {
      border: 1px solid $example-background-secondary;
    }
    thead tr {
      background: $example-background;
    }
    tbody {
      tr:nth-child(odd) {
        background: $example-background-secondary;
      }
      tr:nth-child(even) {
        background: $example-background;
      }
    }
  }
}
</style>
