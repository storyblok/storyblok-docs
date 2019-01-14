<template>
  <main class="main">
    <h1>Available Preview Routes:</h1>
    <ul>
      <li v-for="route in availableRoutes" :key=route>
        <a :href="route">{{route}}</a>
      </li>
    </ul>
  </main>
</template>

<script>
import routes from '@/routes.json'

export default {
  name: 'page',
  computed: {
    availableRoutes() {
      return routes
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin: 0 auto;
  max-width: 800px;
  padding-top: 100px;
  padding-left: 20px;
}
</style>
