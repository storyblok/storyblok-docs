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

  img {
    max-width: 100%;
  }
  
  & > * {
    padding: 25px 0 50px;
    width: 50%;
  }

  a {
    color: #09b3af;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: #4c555a;
    }
  }
}
</style>

