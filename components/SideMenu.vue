<template>
  <aside class="side-menu">
    <nav>
      <ul class="side-menu__list">
        <li :key=toId(method) v-for="(method, index) in menu">
            
          <div class="side-menu__category" :class="{ 'side-menu__category--first': index == 0 }" 
            v-if="isCategoryVisible(index,method)">{{method.attributes.category}}</div>
    
          <a :href="toId(method)" :class="{ 'active': isMenuItemActive(method), 'child-active': isChildActive(method) }">{{formatTitle(method)}}</a>
          
          <ul class="side-menu__children" v-if="method.children.length > 0">
            <li :key=toId(child) v-for="child in method.children">
              <a :href=toId(child) :class="{ 'active': isMenuItemActive(child) }">{{formatTitle(child)}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
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
      return '#' + method.path
    },
    formatTitle(method) {
      return method.attributes.sidebarTitle||method.attributes.title 
    }
  }
}
</script>

<style lang="scss">
$side-bar-width: 220px;

.side-menu {
  position: fixed;
  width: $side-bar-width;
  background: #fafcfc;
  border-right: 1px solid #efefef;
  color: #939da3;
  height: 100vh;
  overflow-y: scroll;

  a {
    display: inline-block;
    padding: 1px 0px;
    width: 100%;

    &.active {
      color: #09b3af;
      font-weight: bold;
    }

    &.active + .side-menu__children, 
    &.child-active + .side-menu__children {
      display: block;
    }
  }

  nav {
    padding: 70px 0px 20px 0px;
  }
}

.side-menu__list {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0px 20px 0px 20px;
  overflow-y: scroll;
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
