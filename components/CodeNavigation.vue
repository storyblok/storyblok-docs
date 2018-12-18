<template>
  <div>
    <ul class="code-navigation">
      <li :key=codeLang.key v-for="codeLang in codeLanguages">
        <a href="#" :class="{ active: $store.state.codelang == codeLang.key }" @click.prevent="switchCodeLang(codeLang.key)">{{codeLang.name}}</a>
      </li>
    </ul>
    <select class="code-navigation-select" v-model="selectedCodeLang"> 
      <option :value=codeLang.key :key=codeLang.key v-for="codeLang in codeLanguages">{{codeLang.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCodeLang: '',
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
  created() {
    this.selectedCodeLang = this.$store.state.codelang
  },
  methods: {
    switchCodeLang(code) {
      this.$store.commit('SET_CODELANG', code)
    }
  },
  watch: {
    selectedCodeLang(val) {
      this.switchCodeLang(val)
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
  
    display: none;
  @media screen and (min-width: 1320px) {
  }
}

.code-navigation-select {
  display: block;
}

</style>
