<template>
  <div class="top-header">
    <div class="top-header__submenu">
      <img src="https://a.storyblok.com/f/39898/x/aa0dc897ff/storyblok-logo.svg" alt="Logo">
    </div>
    <div class="top-header__content"></div>
    <div class="top-header__example">
      <ul>
        <li>
          <a href="#" :class="{ active: $store.state.codelang == 'bash' }" @click.prevent="switchCodeLang('bash')">curl</a>
        </li>
        <li>
          <a href="#" :class="{ active: $store.state.codelang == 'javascript' }" @click.prevent="switchCodeLang('javascript')">JavaScript</a>
        </li>
        <li>
          <a href="#" :class="{ active: $store.state.codelang == 'php' }" @click.prevent="switchCodeLang('php')">PHP</a>
        </li>
        <li>
          <a href="#" :class="{ active: $store.state.codelang == 'java' }" @click.prevent="switchCodeLang('java')">Java</a>
        </li>
        <li>
          <a href="#" :class="{ active: $store.state.codelang == 'csharp' }" @click.prevent="switchCodeLang('csharp')">C#</a>
        </li>
        <li>
          <a href="#" :class="{ active: $store.state.codelang == 'swift' }" @click.prevent="switchCodeLang('swift')">Swift</a>
        </li>
        <li>
          <a href="#" :class="{ active: $store.state.codelang == 'ruby' }" @click.prevent="switchCodeLang('ruby')">Ruby</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    switchCodeLang(code) {
      this.$store.commit('SET_CODELANG', code)
    }
  }
}
</script>

<style lang="scss">
$side-bar-width: 220px;
$top-header-height: 60px;

.top-header {
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  z-index: 30;
}

.top-header__submenu {
  min-width: $side-bar-width;
  height: $top-header-height;
  background: #fafcfc;
  border-bottom: 1px solid #efefef;
  img {
    padding-top: 10px;
    padding-left: 20px;
    height: 47px;
    max-width: $side-bar-width;
  }
}

.top-header__content {
  width: calc(100vw - 220px);
  height: 0px;
}

.top-header__example {
  width: calc(100vw - 220px);
  height: $top-header-height;

  background: #242729;
  color: #d0d4d7;

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    
    li {
      display: inline-block;
    }
  }

  a {
    display: inline-block;
    color: #d0d4d7;
    text-decoration: none;
    padding: 17px;
    margin-right: 10px;

    &.active {
      color: #09b3af;
    }
  }
}
</style>

