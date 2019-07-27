<template>
  <section class="grid">
    <card v-for="card in 5" :key="card"

    />
  </section>
</template>

<style scoped lang="scss">
  .grid {
    @include min-xs {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>

<script>
  import Card from '@/components/Card';

  export default {
    name: 'Educate',

    components: {
      Card
    }
  }
</script>