<template>
  <nav class="side-menu">
    <ul class="side-menu__categories">
      <li :key=category.category v-for="(category, index) in menu">
        <div class="side-menu__category" :class="{ 'side-menu__category--first': index == 0 }">{{category.category}}</div>
        <ul class="side-menu__items">
          <li :key=method.path v-for="method in category.items">
            <a :href="toId(method)" :class="{ 'active': isMenuItemActive(method), 'child-active': isChildActive(method) }">{{title(method)}}</a>
        
            <ul class="side-menu__children" v-if="method.children.length > 0">
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
  computed: {
    menu() {
      return this.$store.state.content[this.$store.state.language].menu
    }
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
      return method.attributes.sidebarTitle||method.attributes.title 
    }
  }
}
</script>

<style lang="scss">
.side-menu {
  position: sticky;
  top: 60px;
  float: left;
  margin-top: 0px;
  width: $side-bar-width;
  background: $sidebar-background;
  border-right: 1px solid $sidebar-border-color;
  color: $sidebar-text-color;
  height: 100vh;
  overflow-y: scroll;

  display: none;
  @media screen and (min-width: 1320px) {
    display: block;
  }

  a {
    display: inline-block;
    padding: 1px 0px;
    width: 100%;
    font-weight: normal;
    color: $sidebar-link-color; 

    &.active {
      color: $brand-highlight;
      font-weight: bold;
    }

    &.active + .side-menu__children, 
    &.child-active + .side-menu__children {
      display: block;
    }
  }

  padding: 20px 0px 20px 0px;
  overflow-y: scroll;
}

.side-menu__categories {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0px 20px 0px 20px;
}

.side-menu__items {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
}

.side-menu__category {
  padding-top: 20px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Titillium Web", Helvetica, Arial, sans-serif;

  &.side-menu__category--first {
    padding-top: 0px;
  }
}

.side-menu__children {
  display: none;
  padding-left: 10px;
  padding-bottom: 10px;
  list-style: none;
}
</style>
