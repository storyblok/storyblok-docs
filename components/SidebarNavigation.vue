<template>
  <nav class="side-navigation">
    <ul class="side-navigation__categories">
      <li :key=category.category v-for="(category, index) in $store.state.menu">
        <div class="side-navigation__category" :class="{ 'side-navigation__category--first': index == 0 }">{{category.category}}</div>
        <ul class="side-navigation__items">
          <li :key=item.contentPath v-for="item in category.items">
            <a :href="toId(item)" 
              @click="navigate(item)" 
              :class="{ 'active': isMenuItemActive(item), 'child-active': isChildActive(item) }">
              {{title(item)}}
            </a>
            <ul class="side-navigation__children" v-if="item.children && item.children.length > 0">
              <li :key=child.contentPath v-for="child in item.children">
                <a :href=toId(child) :class="{ 'active': isMenuItemActive(child) }">{{title(child)}}</a>
              </li>
            </ul> 
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    methodByContentPath(contentPath) {
      if(typeof contentPath === 'undefined') return {}
      return this.$store.state.sections[contentPath.replace(this.$store.getters.originLanguagePath, '')]
    },
    isChildActive(item) {
      let method = this.methodByContentPath(item.contentPath)
      let active = false
      if(method.attributes.showChildren) {
        return method.attributes.showChildren
      }
      if(typeof item.children === 'undefined') {
        return false
      }
      item.children.forEach((element) => {
        if(this.isMenuItemActive(element)) {
          active = true
        }
      })
      return active
    },
    isMenuItemActive(item) {
      // console.log(this.$store.state.activeMenuPath, this.methodByContentPath(item.contentPath).path)
      return this.$store.state.activeMenuPath == this.methodByContentPath(item.contentPath).path
    },
    toId(item){
      return `#${this.methodByContentPath(item.contentPath).path}`
    },
    title(item) {
      let method = this.methodByContentPath(item.contentPath)
      return method.attributes.sidebarTitle || method.attributes.title 
    },
    navigate(item) {
      this.$store.commit('SET_ACTIVE_MENU_PATH', this.methodByContentPath(item.contentPath).path)
    }
  }
}
</script>

<style lang="scss">
.side-navigation {
  position: fixed;
  top: 60px;
  width: $side-bar-width;
  background: $sidebar-background;
  border-right: 1px solid $sidebar-border-color;
  color: $sidebar-text-color;
  height: 100%;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;

  display: none;
  @media screen and (min-width: 1320px) {
    display: block;
  }

  a {
    display: inline-block;
    padding: 1px 0px;
    width: 100%;
    font-weight: normal;
    color: $sidebar-text-color; 

    &.active {
      color: $sidebar-link-color;
      font-weight: bold;
    }

    &.active + .side-navigation__children, 
    &.child-active + .side-navigation__children {
      display: block;
    }
  }  
}

.side-navigation__categories {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0px 20px 20px 20px;

}

.side-navigation__items {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
}

.side-navigation__category {
  padding-top: 20px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: $brand-font;

  &.side-navigation__category--first {
    padding-top: 0px;
  }
}

.side-navigation__children {
  display: none;
  padding-left: 10px;
  padding-bottom: 10px;
  list-style: none;
}
</style>
