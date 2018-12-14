<template>
  <svg viewBox="0 0 54.971 54.971" class="icon">
    <use v-bind="{'xlink:href':'#icon-' + icon}"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: String
  }
}
</script>

<style lang="scss">
.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
}
</style>
