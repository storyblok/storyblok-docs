<template>
  <div>
    <WebsiteHeader/>
    <div class="docs">
      <SvgSprite/>
      <TopHeader/>
      <SidebarNavigation/>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import SvgSprite from '@/components/SvgSprite'
import SidebarNavigation from '@/components/SidebarNavigation'
import TopHeader from '@/components/TopHeader'
import WebsiteHeader from '@/components/WebsiteHeader'

export default {
  components: {
    WebsiteHeader,
    SidebarNavigation,
    TopHeader,
    SvgSprite
  },
  mounted() {
    if (typeof window.localStorage !== 'undefined' && typeof window.localStorage.codelang !== 'undefined') {
      this.$store.commit('SET_CODELANG', window.localStorage.codelang)
    }
  }
}
</script>


<style lang="scss">
body {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  color: #4c555a;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-transform: none;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

h1, h2, h3, h4, h5 {
  font-family: "Titillium Web", Helvetica, Arial, sans-serif;
}

img {
  max-width: 100%;
} 

a {
  color: #09b3af;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
}

h2 {
  font-size: 1.2em;
}

.docs {
  position: relative;
}

</style>
