<template>
  <div class="request-placeholder">
    <h1></h1>
    <p></p>
    <p></p>
    <p></p>
    <pre>
      <code></code>
    </pre>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.request-placeholder {
  padding-top: 10px;

  h1, p {
    background-color: #d3d3d3;
    opacity: 0.1;
    height: 1em;
    margin-top: 10px;
  }

  h1 {
    width: 35%;
  }

  p {
    width: 80%;
    & + p {
      width: 70%;
      & + p {
        width: 75%;
      }
    }
  }

  pre {
    background: #272b2d;
    height: 40px;
    code {
      padding: 20px 20px;
    }
  }
}
</style>
