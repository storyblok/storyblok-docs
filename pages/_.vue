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
    let language = params.pathMatch.length === 0 ? 'en' : params.pathMatch.split('/')[0]

    let orderedResponse = await axios.get(`http://localhost:3000/ordered.${language}.json`)
    let menuResponse = await axios.get(`http://localhost:3000/menu.${language}.json`)
    
    store.commit('SET_ORDERED', { language: language, ordered: orderedResponse.data })
    store.commit('SET_MENU', { language: language, menu: menuResponse.data })

    store.commit('SET_LANGUAGE', { language: language })

    return { loaded: true }
  }
 }
</script>
