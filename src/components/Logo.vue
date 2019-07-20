<template>
  <div class="logo">
    <router-link to="/work">James Thomson</router-link>
  </div>
</template>

<style scoped lang="scss">
  .logo {
    font-family: 'Baskerville', 'Garamond', 'Times New Roman', 'Serif';
    margin-bottom: 30px;
    text-align: center;

    a {
      color: var(--color-text);
      font-size: var(--h1);
    }
  }
</style>

<script>
  export default {
    name: 'Logo'
  };
</script>