<template>
  <main class="main">
    <h1>Available Preview Routes:</h1>
    <ul>
      <li v-for="route in routes" :key=route>
        <a :href="route">{{route}}</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'page',
  data() {
    return {
      routes: ["/en/docs/content-delivery-api/","/en/docs/management-api/"]
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
