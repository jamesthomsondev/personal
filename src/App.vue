<template>
  <div id="app" class="container">

    <header>
      <logo />
      <navigation />
    </header>

    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './assets/styles/base.scss';

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 60px 0;
  }
</style>

<script>
  import Logo from '@/components/Logo';
  import Navigation from '@/components/Navigation';

  export default {
    name: 'App',

    components: {
      Logo,
      Navigation
    }
  }
</script>