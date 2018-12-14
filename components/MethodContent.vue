<template>
  <div class="method-content">
    <div class="method-content__body">
      <h1><a :href="'#' + method.path"><span v-html=method.title></span><SvgIcon icon="link"/></a></h1>
      <div v-html="method.content"></div>
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
  border-top: 1px solid #f1f4f7;

  table {
    width: 100%;
    border-collapse: collapse;
    & + table {
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #f0f4f7;
      padding: 7px;
      font-size: 15px;
      text-align: left;
    }
    thead tr {
      background: #fff;
    }
    tbody {
      tr:nth-child(odd) {
        background: #f0f4f7;
      }
      tr:nth-child(even) {
        background: #fff;
      }
    }
  }
}
.method-content__body {
  padding: 40px 40px 20px;

  h1 a {
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    .icon {
      display: none;   
    }
      
    &:hover, &:focus {
      .icon {
        display: inline-block
      }
    }
  }
}
</style>
