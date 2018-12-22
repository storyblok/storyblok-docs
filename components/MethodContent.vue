<template>
  <div class="method-content">
    <div class="method-content__body">
      <h2><a class="method-content__title" :href="'#' + method.path"><span v-html=method.title></span><SvgIcon icon="link"/></a></h2>
      <div  v-html="method.content"></div>
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

  table {
    display: block;
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

.method-content__body {
  padding: 80px 40px 20px 40px;
}
</style>
