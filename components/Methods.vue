<template>
  <div class="methods">
    <MethodArea :key=method.path v-for="method in methods" :method=method></MethodArea>
  </div>
</template>

<script>
import MethodArea from '@/components/MethodArea'

export default {
  name: 'methods',
  computed: {
    methods() {
      return this.$store.state.content[this.$store.state.language].ordered
    }
  },
  components: {
    MethodArea
  },
  mounted() {
    this.$nextTick( () => {
      let areas = document.querySelectorAll('.method-area')
      let observer = new IntersectionObserver((changes) => {
        changes.forEach(change => {
          if(change.isIntersecting || change.intersectionRatio > 0.4) {
            this.$store.commit('SET_ACTIVE_MENU_PATH', change.target.id)
            history.pushState({}, null, `#${change.target.id}`)
          }
        })
      }, {
          threshold: 0.4
      })
      areas.forEach(area => observer.observe(area))
    }, 0)
  }
 }
</script>
