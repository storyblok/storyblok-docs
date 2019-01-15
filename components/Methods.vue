<template>
  <div class="methods">
    <MethodArea :key=method.path v-for="(method, index) in methods" :method=method :index=index></MethodArea>
  </div>
</template>

<script>
import MethodArea from '@/components/MethodArea'

export default {
  name: 'methods',
  props: {
    methods: Array
  },
  components: {
    MethodArea
  },
  mounted() {
    if(process.client) {
      const areas = document.querySelectorAll('.method')
      const observer = new IntersectionObserver((changes) => {
        let rect = changes[0].target.getBoundingClientRect()
        if (rect.bottom >= 0 && 
          rect.right >= 0 && 
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
          rect.left <= (window.innerWidth || document.documentElement.clientWidth)) {
           this.$store.commit('SET_ACTIVE_MENU_PATH', changes[0].target.id)
           history.pushState({}, null, `#${changes[0].target.id}`)
         }
      })
      areas.forEach(area => observer.observe(area))
    }
  }
 }
</script>


<style lang="scss">
.methods {
  margin-top: 60px;
  @media screen and (min-width: 1050px) {
    margin-top: 0px;
  }
}
</style>
