<template>
  <article class="card">
    <img 
      src="https://images.unsplash.com/photo-1563627890887-ed335358e2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=280&h=160&q=100 280w" 
      srcset="  
        https://images.unsplash.com/photo-1563627890887-ed335358e2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=280&h=160&q=100 280w,
        https://images.unsplash.com/photo-1563627890887-ed335358e2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&h=160&q=100 344w,
        https://images.unsplash.com/photo-1563627890887-ed335358e2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=560&h=320&q=100 560w,
        https://images.unsplash.com/photo-1563627890887-ed335358e2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=688&h=320&q=100 688w,
      "
      sizes="(min-width: 992px) 280px, 100vw"
      alt=""
    >

    <h1>Vue Forum</h1>
    <h2>Community Leader</h2>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus et quae possimus recusandae, dolore culpa consequuntur sint amet iste, necessitatibus, facere aut cumque suscipit odit atque itaque eaque ad quasi.</p>
    <p class="small"><a href="#">Visit Profile</a></p>
  </article>
</template>

<style scoped lang="scss">
  .card {
    width: calc(100% - 40px);
    margin: 0 20px 40px;
    padding: 0 0 30px;
    border-bottom: 1px solid var(--gray-10);

    cursor: pointer;

    @include min-sm {
      width: calc(50% - 40px);
    }

    @include min-md {
      width: 300px;
      margin: 10px;
      padding: 10px;

      border-bottom: 0;

      transition: background var(--transition-short);

      &:hover {
        background-color: var(--color-bg-hover);
      }
    }

    img {
      width: 100%;
      height: 160px;
      margin-bottom: 30px;

      object-fit: cover;
    }

    h1 {
      margin-bottom: 0;

      font-size: var(--h2);
    }

    h2 {
      font-size: var(--h4);
      font-style: italic;
      color: var(--color-text-20);
    }

    > *:last-child {
      margin-bottom: 0;
    }
  }
</style>

<script>
  export default {
    name: 'Card',

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