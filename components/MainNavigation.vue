<template>
  <select name="main-navigation" class="main-navigation" @change="navigate" v-model="selected">
    <optgroup :key=category.path v-for="category in menu" :label="category.category">
      <template v-for="method in category.items">
        <option :value=method.path :key=method.path>{{title(method)}}</option>
        <option :value=child.path :key=child.path v-for="child in method.children">{{title(child)}}</option>
      </template>
    </optgroup>
  </select>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$store.state.content[this.$store.state.language].menu
    },
    activeMenuPath() {
      return this.$store.state.activeMenuPath
    }
  },
  data() {
    return {
      selected: this.activeMenuPath
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
