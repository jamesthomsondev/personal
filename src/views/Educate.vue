<template>
  <section class="grid">
    <card 
      v-for="article in articles" 
      :key="article.title"
      v-bind="article"
    />
  </section>
</template>

<style scoped lang="scss">
  .grid {
    margin-bottom: 60px;

    @include min-xs {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>

<script>
  // API
  import { getArticles } from '@/api';

  // Components
  import Card from '@/components/Card';

  export default {
    name: 'Educate',

    components: {
      Card
    },

    data: () => ({
      articles: []
    }),

    created () {
      getArticles().then(({ data }) => this.articles = data.data);
    }
  }
</script>