<template>
  <section class="method" :id="method.path">
    <MethodContent :method="method"/>
    <MethodExample :method="method"/>
  </section>
</template>

<script>
import MethodContent from '@/components/MethodContent';
import MethodExample from '@/components/MethodExample';

export default {
  props: {
    method: Object
  },
  components: {
    MethodContent,
    MethodExample
  }
}
</script>

<style lang="scss">
@media screen and (min-width: 1000px) {
  .method {
    display:flex;

    .method-content, .method-example {
      min-width: 50%;
    }
  }
}
</style>

