<template>
    <ul class="technology-navigation">
      <li :key=technology.key v-for="technology in technologies">
        <a href="#" :class="{ active: $store.state.technology == technology.key }" @click.prevent="switchTechnology(technology.key)">{{technology.name}}</a>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      technologies: [{
          key: 'bash',
          name: 'curl'
        },
        {
          key: 'javascript',
          name: 'JavaScript'
        },
        {
          key: 'ruby',
          name: 'Ruby'
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
          key: 'python',
          name: 'Python'
        }
      ]
    }
  },
  created() {
    if(process.client) {
      this.switchTechnology(typeof window.localStorage.technology === 'undefined' ? 'bash' : window.localStorage.technology)
    }
  },
  methods: {
    switchTechnology(technology) {
      this.$store.commit('SET_TECHNOLOGY', technology)
    }
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
