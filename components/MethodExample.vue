<template>
  <div class="method-example">
    <div class="method-example__body" v-if=fakeVisible>
      <FakeItem/>
    </div>
    <div :id="methodId" v-if=containsDymanic></div>
    <div class="method-example__body" v-else>
      <div v-html=method.example></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import FakeItem from '@/components/FakeItem'

export default {
  computed: {
    methodId() {
      return this.method.path.split('/').join('');
    },
    fakeVisible() {
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
    FakeItem
  },
  mounted() {
    if(this.containsDymanic) {
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
    display: block;
    overflow-x: scroll;
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
  padding: 20px 40px 20px 40px;
}

</style>
