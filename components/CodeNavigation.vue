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
      codeLanguages: [{
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
  created() {
    if(process.client) {
      this.switchCodeLang(typeof window.localStorage.codelang === 'undefined' ? 'bash' : window.localStorage.codelang)
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
  background: $example-background-secondary;
  white-space: nowrap;
  list-style: none;
  padding: 0px 0px 0px 10px;
  margin: 0px;
  
  li {
    display: inline-block;
  }

  a {
    display: inline-block;
    color: $example-text-color;
    text-decoration: none;
    margin-right: 10px;
    line-height: $top-header-height - 3px;
    border-bottom: 3px solid $example-background-secondary;

    &.active {
      border-bottom: 3px solid #09b3af;
    }

    padding: 0px 5px;

    @media screen and (min-width: 580px) {
      padding: 0px 5px;
    }
    @media screen and (min-width: 1000px) {
      padding: 0px 10px;
    }
  }
}

</style>
