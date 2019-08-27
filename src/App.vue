<template>
  <main id="app" class="container">
    <theme-toggle />

    <header>
      <logo />
      <navigation />
    </header>

    <router-view/>
  </main>
</template>

<style lang="scss">
  @import './assets/styles/base.scss';

  .container {
    min-width: 320px;
    max-width: 960px;
    margin: 0 auto;
    padding: 12vw 0;
  
    @include min-xs {
      padding: 60px 0 0;
    }
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