<template>
  <div class="method-content">
    <div class="method-body">
      <h1 v-if="index == 0">
        <a class="method-content__title" id="main" :href="'#' + method.path">
          <span v-html=method.title></span>
          <SvgIcon icon="link"/>
        </a>
      </h1>
      <h2 v-else>
        <a class="method-content__title" :href="'#' + method.path">
          <span v-html=method.title></span>
          <SvgIcon icon="link"/>
        </a>
      </h2>
      <div v-html="method.content"></div>
      <a class="method-content__github" :href="editSectionURL"><SvgIcon icon="github"/><span>Edit this section on GitHub</span></a>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  props: {
    method: Object,
    index: Number
  },
  computed: {
    editSectionURL() {
      return `https://github.com/storyblok/storyblok-docs/blob/master/content/${this.method.contentPath}.md` 
    }
  },
  components: {
    SvgIcon
  }
}
</script>

<style lang="scss">
.method-content {
  color: $content-text-color;
  border-top: 1px solid $content-background-secondary;

  a {
    color: $content-link-color;
  }

  table {
    th, td {
      border: 1px solid $content-background-secondary;
    }
    thead tr {
      background: $content-background;
    }
    tbody {
      tr:nth-child(odd) {
        background: $content-background-secondary;
      }
      tr:nth-child(even) {
        background: $content-background;
      }
    }
  }
}

.method-content__title {
  font-family: inherit;
  font-size: 1.3em;
  color: inherit;

  .icon {
    display: none;   
  }
    
  &:hover, &:focus {
    text-decoration: none;

    .icon {
      padding-left: 5px;
      display: inline-block
    }
  }
}

.method-content__github {
  display: block;
  font-weight: normal;
  padding: 40px 0px 0px 0px;
  
  .icon {
    margin-right: 5px;  
    fill: $content-link-color;
  }
}
</style>
