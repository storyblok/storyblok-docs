<template>
  <div class="methods">
    <MethodArea :key=item.contentPath v-for="(item, index) in $store.state.flattened" :method=methodByContentPath(item.contentPath) :index=index></MethodArea>
  </div>
</template>

<script>
import MethodArea from '@/components/MethodArea'
import throttle from 'lodash.throttle';

export default {
  name: 'methods',
  data() {
    return {
      scheduledAnimationFrame: false,
      lastScrollY: 0,
      titles: []
    }
  },
  components: {
    MethodArea
  },
  mounted() {
    if(process.client) {
      this.titles = document.querySelectorAll('.method-content__title')
      window.addEventListener('scroll', throttle(this.onScroll, 100));
    }
  },
  methods: {
    methodByContentPath(contentPath) {
      return this.$store.state.sections[contentPath.replace(this.$store.getters.originLanguagePath, '')]
    },
    onScroll() {
      this.lastScrollY = window.scrollY;
      if (this.scheduledAnimationFrame){
        return
      }
      this.scheduledAnimationFrame = true;
      requestAnimationFrame(this.setActiveMenuPath);
    },
    setActiveMenuPath() {
      this.titles.forEach(title => {
        let rect = title.getBoundingClientRect()
        let hash = title.hash.replace('#', '')
        if (this.isInMiddleOfViewport(title) && 
          hash != this.$store.state.activeMenuPath) {
          this.$store.commit('SET_ACTIVE_MENU_PATH', hash)
        }
      })
      this.scheduledAnimationFrame = false;
    },
    isInMiddleOfViewport(elem) {
      let bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) * (2/5) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  }
}
</script>

<style lang="scss">
.methods {
  @media screen and (min-width: 1320px) {
    margin-left: 220px;
  }
}
</style>
