<template>
  <div>
    <TopHeader :menu="menu"/>
    <SidebarNavigation :menu="menu"/>
    <main class="main">
      <Methods :methods="ordered"/>
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
  data() {
    return {
      lang: 'en',
      menu: [],
      ordered: []
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.lang
      }
    }
  },
  components: {
    Methods,
    SidebarNavigation,
    TopHeader,
  },
  async asyncData ({ store, params, payload }) {
    let menu = null
    let ordered = null

    if (!!payload) {
      menu = payload.menu
      ordered = payload.ordered
    } else {
      const base = process.client ? window.location.origin : 'http://localhost:3000'
      const [menuRes, orderedRes] = await Promise.all([
        axios.get(base + `/${params.origin}.menu.${params.lang}.json`), 
        axios.get(base + `/${params.origin}.ordered.${params.lang}.json`)])
      menu = menuRes.data
      ordered = orderedRes.data
    }

    return {
      menu,
      ordered,
      lang: params.lang
    }
  }
 }
</script>

<style lang="scss" scoped>
.main {
  @media screen and (min-width: 1320px) {
    margin-left: 220px;
  }
}
</style>
