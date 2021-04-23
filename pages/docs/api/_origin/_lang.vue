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
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      // title: `${this.$store.state.sections[this.$store.state.menu[0].items[0]]} - Storyblok`,
      link: [
        {
          rel: 'canonical',
          href: `https://www.storyblok.com${this.$route.path}`
        }
      ]
    }
  },
  components: {
    Methods,
    SidebarNavigation,
    TopHeader,
  },
  async fetch ({ store, params, payload }) {
    const origin = params.origin
    const lang = params.lang || 'v2'

    let menu = null
    let sections = null

    if (!!payload) {
      menu = payload.menu
      sections = payload.sections
    } else {
      const base = process.client ? window.location.origin : 'http://localhost:3000'
      const [menuRes, sectionsRes] = await Promise.all([
        axios.get(base + `/${origin}.menu.${lang}.json`),
        axios.get(base + `/${origin}.methods.${lang}.json`)])
      menu = menuRes.data
      sections = sectionsRes.data
    }

    store.commit('SET_LANG', lang)
    store.commit('SET_ORIGIN', origin)
    store.commit('SET_SECTIONS', sections)
    store.commit('SET_MENU', menu)
  }
 }
</script>
