<template>
  <nav class="side-navigation">
    <ul class="side-navigation__categories">
      <li :key=category.category v-for="(category, index) in menu">
        <div class="side-navigation__category" :class="{ 'side-navigation__category--first': index == 0 }">{{category.category}}</div>
        <ul class="side-navigation__items">
          <li :key=method.path v-for="method in category.items">
            <a :href="toId(method)" @click="navigate(method)" :class="{ 'active': isMenuItemActive(method), 'child-active': isChildActive(method) }">{{title(method)}}</a>
        
            <ul class="side-navigation__children" v-if="method.children.length > 0">
              <li :key=child.path v-for="child in method.children">
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
  props: {
    menu: Array
  },
  methods: {
    isCategoryVisible(index, method) {
      if (index == 0) {
        return true
      }
      if (index > 0) {
        return this.menu[index - 1].attributes.category != method.attributes.category
      }
      return false
    },
    isChildActive(method) {
      let active = false
      if(method.attributes.showChildren) {
        return method.attributes.showChildren
      }
      method.children.forEach((element) => {
        if(this.isMenuItemActive(element)) {
          active = true
        }
      })
      return active
    },
    isMenuItemActive(method) {
      return this.$store.state.activeMenuPath == method.path
    },
    toId(method){
      return `#${method.path}`
    },
    title(method) {
      return method.attributes.sidebarTitle || method.attributes.title 
    },
    navigate(method) {
      this.$store.commit('SET_ACTIVE_MENU_PATH', method.path)
    }
  }
}
</script>

<style lang="scss">
.side-navigation {
  position: fixed;
  top: 0px;
  width: $side-bar-width;
  background: $sidebar-background;
  border-right: 1px solid $sidebar-border-color;
  color: $sidebar-text-color;
  height: 100%;
  max-height: 100vh;
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
  padding: 70px 20px 20px 20px;

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
