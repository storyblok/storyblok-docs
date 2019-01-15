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
@media screen and (min-width: 1050px) {
  .method {
    display:flex;

    .method-content, .method-example {
      min-width: 50%;
    }
  }
}
</style>

