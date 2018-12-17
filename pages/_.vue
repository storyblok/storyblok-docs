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
    let language = params.pathMatch.length === 0 ? process.env.defaultLanguage : params.pathMatch.split('/')[0]

    let orderedResponse = await axios.get(`${process.env.baseURL}/ordered.${language}.json`)
    let menuResponse = await axios.get(`${process.env.baseURL}/menu.${language}.json`)
    
    store.commit('SET_ORDERED', { language: language, ordered: orderedResponse.data })
    store.commit('SET_MENU', { language: language, menu: menuResponse.data })

    store.commit('SET_LANGUAGE', { language: language })
  }
 }
</script>

<style>
.main {
  margin-left: 220px;
  width: calc(100vw - 220px);
}
</style>
