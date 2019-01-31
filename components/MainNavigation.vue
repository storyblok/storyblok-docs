<template>
  <label class="main-navigation-label">
    <select aria-label="Main Navigation" name="main-navigation" class="main-navigation" @change="navigate" v-model="activeMenuPath">
      <optgroup :key=category.category v-for="category in $store.state.menu" :label="category.category">
        <template v-for="item in category.items">
          <option :value=path(item) :key=path(item)>{{title(item)}}</option>
          <option :value=path(child) :key=path(child) v-for="child in item.children">{{title(child)}}</option>
        </template>
      </optgroup>
    </select>
  </label>
</template>

<script>
export default {
  data() {
    return {
      activeMenuPath: this.$store.state.activeMenuPath
    }
  },
  methods: {
    methodByContentPath(contentPath) {
      if(typeof contentPath === 'undefined') return {}
      return this.$store.state.sections[contentPath.replace(this.$store.getters.originLanguagePath, '')]
    },
    path(item) {
      return this.methodByContentPath(item.contentPath).path
    },
    navigate() {
      this.$store.state.activeMenuPath = this.methodByContentPath(this.activeMenuPath).path
      if(process.client)  {
        window.location.hash = '#' + this.$store.state.activeMenuPath;
      }
    },
    title(item) {
      let method = this.methodByContentPath(item.contentPath)
      return method.attributes.sidebarTitle||method.attributes.title
    }
  },
  watch: {
    '$store.state.activeMenuPath': function(v) {
      this.activeMenuPath = this.$store.state.activeMenuPath
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
