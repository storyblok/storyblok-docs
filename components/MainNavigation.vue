<template>
  <label class="main-navigation-label">
    <select aria-label="Main Navigation" name="main-navigation" class="main-navigation" @change="navigate" v-model="$store.state.activeMenuPath">
      <optgroup :key=category.path v-for="category in menu" :label="category.category">
        <template v-for="method in category.items">
          <option :value=method.path :key=method.path>{{title(method)}}</option>
          <option :value=child.path :key=child.path v-for="child in method.children">{{title(child)}}</option>
        </template>
      </optgroup>
    </select>
  </label>
</template>

<script>
export default {
  props: {
    menu: Array
  },
  methods: {
    navigate() {
      if(process.client)  {
        window.location.hash = '#' + this.$store.state.activeMenuPath;
      }
    },
    title(method) {
      return method.attributes.sidebarTitle||method.attributes.title
    }
  }
}
</script>

<style lang="scss">
.main-navigation {
  position:relative;
  appearance: none;
  border-radius: 0;
  padding: 10px 5px 10px 25px;
  margin: 10px;
  font-size: inherit;
  display: inline-block;

  border: 1px solid $sidebar-border-color;
  background: $sidebar-background;
  color: $sidebar-text-color;

  @media screen and (min-width: 1320px) {
    display:none;
  }
}
.main-navigation-label {
  position: relative;
  display: inline-block;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    width: 1em;
    height: 0.125em;
    border-width: 1px;
    border-top: 0.375em double $example-text-color;
    border-bottom: 0.125em solid $example-text-color;
    z-index: 1;
  }
}
</style>
