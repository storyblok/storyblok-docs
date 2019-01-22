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
      },
      title: `${this.ordered[0].title} - Storyblok`
    }
  },
  components: {
    Methods,
    SidebarNavigation,
    TopHeader,
  },
  async asyncData ({ store, params, payload }) {
    const origin = params.origin
    const lang = params.lang || 'en'

    let menu = null
    let ordered = null

    if (!!payload) {
      menu = payload.menu
      ordered = payload.ordered
    } else {
      const base = process.client ? window.location.origin : 'http://localhost:3000'
      const [menuRes, orderedRes] = await Promise.all([
        axios.get(base + `/${origin}.menu.${lang}.json`), 
        axios.get(base + `/${origin}.ordered.${lang}.json`)])
      menu = menuRes.data
      ordered = orderedRes.data
    }

    return {
      menu,
      ordered,
      lang
    }
  }
 }
</script>