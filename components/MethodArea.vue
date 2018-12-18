<template>
  <section class="method-area" :id="method.path">
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
.method-area {
  display:flex;

  & > * {
    padding: 50px 0px 50px 0px;
    min-width: 50%;
  }
}
</style>

