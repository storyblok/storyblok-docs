<template>
  <div class="method-example">
    <div class="method-example__body">
      <RequestPlaceholder v-if=isPlaceholderVisible />
      <div :id="methodId" v-if=containsDymanic></div>
      <div v-html=method.example v-else></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import RequestPlaceholder from '@/components/requests/RequestPlaceholder'

export default {
  computed: {
    methodId() {
      return this.method.path.split('/').join('');
    },
    isPlaceholderVisible() {
      return !this.loaded && this.containsDymanic
    },
    containsDymanic() {
      return this.method.example.indexOf(`RequestExample`) >= 0 ||
             this.method.example.indexOf(`v-`) >= 0
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
    RequestPlaceholder
  },
  mounted() {
    if(this.containsDymanic) {
      let parent = this
      let DynamicContent = Vue.extend({
        template: `<div>${this.method.example}</div>`,
        methods: {
          // formats date to YYYY-MM-DD HH:MM
          formatDate(date) {
            return date.getFullYear().toString() + "-"+((date.getMonth()+1).toString().length==2?(date.getMonth()+1).toString():"0"+(date.getMonth()+1).toString())+"-"+(date.getDate().toString().length==2?date.getDate().toString():"0"+date.getDate().toString())+" "+(date.getHours().toString().length==2?date.getHours().toString():"0"+date.getHours().toString())+":"+((parseInt(date.getMinutes()/5)*5).toString().length==2?(parseInt(date.getMinutes()/5)*5).toString():"0"+(parseInt(date.getMinutes()/5)*5).toString())
          }
        },
        mounted() {
          parent.loaded = true
        }
      })
      this.childInstance = new DynamicContent({ el: `#${this.methodId}`, store: this.$store})
    }
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
    font-size: inherit;
  }

  table {
    width: 100%;
    overflow-x: scroll;
    border: 1px solid $example-background-secondary;
    border-collapse: collapse;
    th, td {
      border: 1px solid $example-background-secondary;
      padding: 7px;
      font-size: 13px;
      text-align: left;
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

.method-example__body {
  padding: 80px 40px 70px 40px;
}

</style>
