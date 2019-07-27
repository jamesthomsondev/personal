<template>
  <section>
    <showcase v-for="showcase in 4" :key="showcase" />
  </section>
</template>

<style scoped lang="scss">
  
</style>

<script>
  import Showcase from '@/components/Showcase';

  export default {
    components: {
      Showcase
    }
  }
</script>