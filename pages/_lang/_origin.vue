<template>
  <div>
    <TopHeader/>
    <SidebarNavigation/>
    <main class="main">
      <Methods/>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import Methods from '@/components/Methods'
import SidebarNavigation from '@/components/SidebarNavigation'
import TopHeader from '@/components/TopHeader'

export default {
  name: 'page',
  components: {
    Methods,
    SidebarNavigation,
    TopHeader,
  },
  async fetch ({ store, params, payload }) {
    let origin = params.origin
    let lang = typeof params.lang === 'undefined' ? process.env.defaultLanguage : params.lang

    let menu = null
    let ordered = null

    if (payload) {
      menu = payload.menu
      ordered = payload.ordered
    } else {
      let base = process.client ? window.location.origin : 'http://localhost:3000'
      ordered = await axios.get(base + `/${origin}.ordered.${lang}.json`).data
      menu = await axios.get(base + `/${origin}.menu.${lang}.json`).data
    }

    store.commit('SET_ORDERED', { origin: origin, language: lang, ordered: ordered })
    store.commit('SET_MENU', { origin: origin, language: lang, menu: menu })

    store.commit('SET_ORIGIN', { origin: origin })
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
