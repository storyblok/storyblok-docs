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
  async asyncData ({ store, params }) {
    let origin = params.origin
    let lang = typeof params.lang === 'undefined' ? process.env.defaultLanguage : params.lang

    let orderedResponse = require(`@/assets/${origin}.ordered.${lang}.json`)
    let menuResponse = require(`@/assets/${origin}.menu.${lang}.json`)

    store.commit('SET_ORDERED', { origin: origin, language: lang, ordered: orderedResponse })
    store.commit('SET_MENU', { origin: origin, language: lang, menu: menuResponse })

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
