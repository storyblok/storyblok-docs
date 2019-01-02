<template>
  <div class="method-content">
    <div class="method-content__body">
      <h2><a class="method-content__title" :href="'#' + method.path"><span v-html=method.title></span><SvgIcon icon="link"/></a></h2>
      <div  v-html="method.content"></div>
      <a class="method-content__github" :href="'https://github.com/storyblok/storyblok/blob/master/' + method.path + '.md'"><SvgIcon icon="github"/><span>Edit this section on GitHub</span></a>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  props: {
    method: Object
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
    font-size: inherit;
  }

  table {
    overflow-x: scroll;
    width: 100%;
    border-collapse: collapse;
    & + table {
      margin-top: 20px;
    }
    th, td {
      border: 1px solid $content-background-secondary;
      padding: 7px;
      font-size: 15px;
      text-align: left;
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
}

.method-content__github {
  display: block;
  font-weight: normal;
  padding: 40px 0px 0px 0px;
  .icon {
    margin-right: 5px;  
    fill: $brand-highlight;
  }
}

.method-content__body {
  padding: 80px 40px 20px 40px;
}
</style>
