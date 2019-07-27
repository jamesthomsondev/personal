<template>
  <div class="hero">
    <img 
      src="https://images.unsplash.com/photo-1563242541-b204a2a7d88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=100" 
      srcset="  
        https://images.unsplash.com/photo-1563242541-b204a2a7d88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&h=840&q=100 640w,
        https://images.unsplash.com/photo-1563242541-b204a2a7d88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=100 960w,
        https://images.unsplash.com/photo-1563242541-b204a2a7d88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1242&h=1260&q=100 1242w,
        https://images.unsplash.com/photo-1563242541-b204a2a7d88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&h=840&q=100 1920w
      "
      sizes="(min-width: 540px) 960px, 100vw"
      alt=""
    >
  </div>
</template>

<style scoped lang="scss">
  .hero {
    overflow: hidden;
    height: 50vw;
    margin-bottom: 10%;

    background-color: var(--color-bg-inverse);

    @include min-xs {
      max-width: 700px;
      height: 320px;
      margin: 0 auto 60px;
    }

    img {
      width: 100%;
      height: 420px;
      object-fit: cover;

      @include min-xs {
        object-fit: none;
      }
    }

    transition: height var(--transition-medium);

    @include min-xs {
      transition: max-width var(--transition-medium), height var(--transition-medium) var(--delay-short);
    }

    // Move this to a class which we'll toggle
    &:hover {
      max-width: 960px;
      height: 420px;
    }
  }
</style>

<script>
  export default {
    name: 'Hero',

    components: {

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