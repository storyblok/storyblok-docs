<template>
  <ul class="code-navigation">
    <li :key=codeLang.key v-for="codeLang in codeLanguages">
      <a href="#" :class="{ active: $store.state.codelang == codeLang.key }" @click.prevent="switchCodeLang(codeLang.key)">{{codeLang.name}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      codeLanguages: [
        {
          key: 'bash',
          name: 'curl'
        },
        {
          key: 'javascript',
          name: 'JavaScript'
        },
        {
          key: 'php',
          name: 'PHP'
        },
        {
          key: 'java',
          name: 'Java'
        },
        {
          key: 'csharp',
          name: 'C#'
        },
        {
          key: 'swift',
          name: 'Swift'
        },
        {
          key: 'ruby',
          name: 'Ruby'
        }
      ]
    }
  },
  methods: {
    switchCodeLang(code) {
      this.$store.commit('SET_CODELANG', code)
    }
  }
}
</script>

<style lang="scss">
.code-navigation {
  white-space: nowrap;
  list-style: none;
  padding: 0px;
  margin: 0px;
  
  li {
    display: inline-block;
  }
}
</style>
