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
    this.$nextTick(() => {
      const hash = window.location.hash
      const areas = document.querySelectorAll('.method')
      const observer = new IntersectionObserver((changes) => {
        if (changes[0].intersectionRatio <= 0) return;
        
        this.$store.commit('SET_ACTIVE_MENU_PATH', changes[0].target.id)
        history.pushState({}, null, `#${changes[0].target.id}`)
      
      })
      areas.forEach(area => observer.observe(area))
    }, 0)
  }
 }
</script>
