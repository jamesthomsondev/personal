<template>
  <div id="app" class="container">
    <theme-toggle />

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
  import ThemeToggle from '@/components/ThemeToggle';
  import Logo from '@/components/Logo';
  import Navigation from '@/components/Navigation';

  export default {
    name: 'App',

    components: {
      ThemeToggle,
      Logo,
      Navigation
    }
  }
</script>