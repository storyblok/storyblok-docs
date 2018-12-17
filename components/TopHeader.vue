<template>
  <div class="top-header">
    <div class="top-header__submenu"></div>
    <div class="top-header__content"></div>
    <div class="top-header__example">
      <CodeNavigation/>
    </div>
  </div>
</template>

<script>
import CodeNavigation from '@/components/CodeNavigation'

export default {
  components: {
    CodeNavigation
  }
}
</script>

<style lang="scss">
$side-bar-width: 220px;
$top-header-height: 60px;

.top-header {
  position: sticky;
  top: 0px;
  width: 100%;
  display: flex;
  z-index: 30;
}

.top-header__submenu {
  min-width: $side-bar-width;
  height: 0px;
}

.top-header__content {
  width: calc(100vw - 220px);
  height: 0px;
}

.top-header__example {
  width: calc(100vw - 224px);
  height: $top-header-height;
  background: #242729;
  color: #d0d4d7;
  overflow-x: scroll;

  a {
    display: inline-block;
    color: #d0d4d7;
    text-decoration: none;
    padding: 17px;
    margin-right: 10px;

    &.active {
      color: #09b3af;
    }
  }
}
</style>

