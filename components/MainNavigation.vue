<template>
  <select name="main-navigation" class="main-navigation" @change="navigate" v-model="selected">
    <option :value=method.path :key=method.path v-for="method in menu">{{title(method)}}</option>
  </select>
</template>

<script>
export default {
  computed: {
    menu() {
      let menu = []
      this.$store.state.content[this.$store.state.language].menu.forEach(method => {
        menu.push(method)
        method.children.forEach(child => {
          child.child = true
          menu.push(child)
        })        
      })
      return menu
    },
    activeMenuPath() {
      return this.$store.state.activeMenuPath
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  created() {
    this.selected = this.activeMenuPath
  },
  watch: {
    activeMenuPath(newVal) {
      this.selected = newVal
    }
  },
  methods: {
    navigate() {
      this.$store.commit('SET_ACTIVE_MENU_PATH', this.selected)
      window.location.hash = '#' + this.selected;
    },
    title(method) {
      return method.attributes.sidebarTitle||method.attributes.title
    }
  }
}
</script>

<style lang="scss">
.main-navigation {
  appearance: none;
  border-radius: 0;
  border: 1px solid #272b2d;
  padding: 5px 5px;
  margin: 15px;
  font-size: inherit;
  background: #33373a;
  color: #dde4e8;
  display: inline-block;

  @media screen and (min-width: 1320px) {
    display:none;
  }
}
</style>
