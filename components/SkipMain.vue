<template>
  <a class="skip-main" href="#main">Skip to main content</a>
</template>

<style lang="scss">
a.skip-main {
    left:-999px;
    position:absolute;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    z-index:-999;
}
a.skip-main:focus, a.skip-main:active {
    color: $brand-background-light;
    background-color: $brand-background-dark;
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow:auto;
    margin: 10px 35%;
    padding: 5px;
    border-radius: 15px;
    border: 4px solid $brand-highlight;
    text-align: center;
    font-size: 1.2em;
    z-index: 999;
}
</style>
