<template>
    <ul class="technology-navigation">
      <li :key=technology.key v-for="technology in technologies">
        <template v-if="technology.show()">
          <a href="#" :class="{ active: $store.state.technology == technology.key }" @click.prevent="switchTechnology(technology.key)">{{technology.name}}</a>
        </template>
      </li>
    </ul>
</template>

<script>
export default {
  data(instance) {
    return {
      technologies: [{
          key: 'bash',
          name: 'curl',
          show: () => !instance.isTypescriptRoute
        },
        {
          key: 'javascript',
          name: 'JavaScript',
          show: () => !instance.isTypescriptRoute
        },
        {
          key: 'typescript',
          name: 'Typescript',
          show: () => instance.isTypescriptRoute
        },
        {
          key: 'ruby',
          name: 'Ruby',
          show: () => !instance.isTypescriptRoute
        },
        {
          key: 'php',
          name: 'PHP',
          show: () => !instance.isTypescriptRoute
        },
        {
          key: 'java',
          name: 'Java',
          show: () => !instance.isTypescriptRoute
        },
        {
          key: 'csharp',
          name: 'C#',
          show: () => !instance.isTypescriptRoute
        },
        {
          key: 'swift',
          name: 'Swift',
          show: () => !instance.isTypescriptRoute
        },
        {
          key: 'python',
          name: 'Python',
          show: () => !instance.isTypescriptRoute
        }
      ]
    }
  },
  created() {
    if(process.client) {
      this.switchTechnology(typeof window.localStorage.technology === 'undefined' ? 'bash' : window.localStorage.technology)
    }
  },

  computed: {
    isTypescriptRoute() {
      return this.$route.fullPath.indexOf('typescript-interfaces') > -1
    }
  },

  methods: {
    switchTechnology(technology) {
      this.$store.commit('SET_TECHNOLOGY', technology)
    },
  }
}
</script>

<style lang="scss">
.technology-navigation {
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
      border-bottom: 3px solid $brand-highlight;
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
