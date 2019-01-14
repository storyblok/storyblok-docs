<template>
  <div class="top-header">
    <div class="top-header__submenu">
      <BrandLogo/>
    </div>
    <div class="top-header__content">
      <MainNavigation :menu="menu"/>
    </div>
    <div class="top-header__example">
      <CodeNavigation/>
    </div>
  </div>
</template>

<script>
import CodeNavigation from '@/components/CodeNavigation'
import MainNavigation from '@/components/MainNavigation'
import BrandLogo from '@/components/BrandLogo'


export default {
  props: {
    menu: Array
  },
  components: {
    MainNavigation,
    CodeNavigation,
    BrandLogo
  }
}
</script>

<style lang="scss">
.top-header {  
  background: $sidebar-background;
  @media screen and (min-width: 1320px) {
    background: transparent;
  }

  color: #dde4e8;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 30;
  
  display: flex;
  flex-flow: row wrap;
}

.top-header__submenu {
  width: 50%;
  @media screen and (min-width: 1050px) {
    width: 100%;
    max-width: $side-bar-width;
  }
}

.top-header__content {  
  text-align: right;
  width:50%;

  @media screen and (min-width: 1050px) {
    width: calc(50vw - 220px);
  }

  @media screen and (min-width: 1320px) {
    width: calc(50vw - 109px);
    height: 0;
    visibility: hidden;
  }
}

.top-header__example {
  background: $brand-background-dark;
  flex-grow: 1;
  display: none;
  
  @media screen and (min-width: 1050px) {
    display: block;
    height: auto;
    text-align: left;
  }
}
</style>

