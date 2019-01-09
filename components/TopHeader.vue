<template>
  <div class="top-header">
    <div class="top-header__submenu"></div>
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

export default {
  props: {
    menu: Array
  },
  components: {
    MainNavigation,
    CodeNavigation
  }
}
</script>

<style lang="scss">
.top-header {  
  background: $brand-background;
  @media screen and (min-width: 1320px) {
    background: transparent;
  }

  color: #dde4e8;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 30;
  
  @media screen and (min-width: 915px) {
    display: flex;
  }
}

.top-header__submenu {
  height: 0;
  
  min-width: auto;
  float:left;

  svg {
    fill: #fff;
    padding-top: 12px;
    padding-left: 10px;
  }

  @media screen and (min-width: 915px) {
    min-width: $side-bar-width;
  }
}

.top-header__content {
  @media screen and (min-width: 480px) {
    text-align: right;
  }

  h1 {
    font-size: 1.5em;
    padding-left: 40px;
  }
  
  @media screen and (min-width: 1050px) {
    width: calc(50vw - 220px);
  }

  @media screen and (min-width: 1320px) {
    width: calc(50vw - 109px);
  }
}

.top-header__example {
  flex-grow: 1;
  text-align: center;
  
  @media screen and (min-width: 1050px) {
    text-align: left;
  }
}
</style>

