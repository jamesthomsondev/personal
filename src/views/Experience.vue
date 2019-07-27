<template>
  <section class="grid">
    <div class="skillsets">
      <skillset v-for="set in 2" :key="set" />
    </div>
    <div class="timeline">
      <job v-for="job in 4" :key="job" />
    </div>
  </section>
</template>

<style scoped lang="scss">
  .grid {
    display: flex;
    flex-direction: column;

    @include min-sm {
      flex-direction: row;
      justify-content: space-between;
    }

    .skillsets {
      order: 1;

      @include min-sm {
        order: 0;
      }
    }

    .timeline {
      order: 0;

      @include min-sm {
        order: 1;
      }
    }
  }
</style>

<script>
  import Skillset from '@/components/Skillset';
  import Job from '@/components/Job';

  export default {
    name: 'Experience',

    components: {
      Skillset,
      Job
    },

    props: {

    },

    data: () => ({
      
    }),

    computed: {

    },

    methods: {

    },

    created () {

    }
  };
</script>