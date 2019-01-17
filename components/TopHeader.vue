<template>
  <div class="top-header">
    <div class="top-header__submenu">
      <BrandLogo/>
    </div>
    <div class="top-header__content">
      <MainNavigation :menu="menu"/>
    </div>
    <div class="top-header__example">
      <TechnologyNavigation/>
    </div>
  </div>
</template>

<script>
import TechnologyNavigation from '@/components/TechnologyNavigation'
import BrandLogo from '@/components/BrandLogo'

export default {
  props: {
    menu: Array
  },
  components: {
    MainNavigation: () => import('@/components/MainNavigation'),
    TechnologyNavigation,
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

  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 30;
  
  display: flex;
  flex-flow: row wrap;
}

.top-header__submenu {
  background: $sidebar-background;
  width: 50%;
  @media screen and (min-width: 1050px) {
    width: 100%;
    max-width: $side-bar-width;
  }
}

.top-header__content {  
  background: $sidebar-background;
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
  color: $example-text-color;
  flex-grow: 1;
  display: none;
  
  @media screen and (min-width: 1050px) {
    display: block;
    height: auto;
    text-align: left;
  }
}
</style>

