<template>
  <div class="docs">
    <SvgSprite/>
    <TopHeader/>
    <SideMenu/>
    <main class="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import SvgSprite from '@/components/SvgSprite';
import SideMenu from '@/components/SideMenu';
import TopHeader from '@/components/TopHeader';

export default {
  components: {
    SideMenu,
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
  
a {
  color: #4c555a;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: #09b3af;
  }
}

h2 {
  font-size: 1.2em;
}

.docs {
  display:flex;

  & > .main {
    margin-left: 220px;
    width: calc(100vw - 220px);
  }
}

</style>
