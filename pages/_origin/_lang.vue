<template>
  <main class="main">
    <Methods/>
  </main>
</template>

<script>
import axios from 'axios'
import Methods from '@/components/Methods'

export default {
  name: 'page',
  components: {
    Methods
  },
  async asyncData ({ store, params }) {
    let origin = params.origin
    let lang = typeof params.lang === 'undefined' ? process.env.defaultLanguage : params.lang

    let orderedResponse = await axios.get(`${process.env.baseURL}/${origin}.ordered.${lang}.json`)
    let menuResponse = await axios.get(`${process.env.baseURL}/${origin}.menu.${lang}.json`)
    
    store.commit('SET_ORDERED', { origin: origin, language: lang, ordered: orderedResponse.data })
    store.commit('SET_MENU', { origin: origin, language: lang, menu: menuResponse.data })

    store.commit('SET_LANGUAGE', { language: lang })
  }
 }
</script>

<style lang="scss">
.main {
  margin-top: $top-header-height * -1;
  @media screen and (min-width: 1320px) {
    margin-left: 220px;
  }
}
</style>
