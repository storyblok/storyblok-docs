<template>
  <main class="main">
    Startpage
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'page',
  components: {
  },
  async asyncData ({ store, params }) {
    store.commit('SET_LANGUAGE', { language: process.env.defaultLanguage })
  }
 }
</script>

<style lang="scss">
.main {
  @media screen and (min-width: 1320px) {
    margin-left: 220px;
  }
}
</style>
