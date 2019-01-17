<template>
  <section class="method" :id="method.path">
    <MethodContent :method="method" :index="index"/>
    <MethodExample :method="method"/>
  </section>
</template>

<script>
import MethodContent from '@/components/MethodContent';
import MethodExample from '@/components/MethodExample';

export default {
  props: {
    method: Object,
    index: Number
  },
  components: {
    MethodContent,
    MethodExample
  }
}
</script>

<style lang="scss">
.method {
  display: block;

  .table {
    width: 100%;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    & + table {
      margin-top: 20px;
    }
    th, td {
      padding: 7px;
      font-size: 13px;
      text-align: left;
    }
  }

  a {
    font-size: inherit;
  }

  .method-body {
    padding: 80px 20px 70px 20px;
  }

  @media screen and (min-width: 850px) {
    display:flex;

    .method-content, .method-example {
      min-width: 50%;
    }

    .method-body {
      padding: 80px 40px 70px 40px;
    }
  }
}

</style>

