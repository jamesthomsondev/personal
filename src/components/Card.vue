<template functional>
  <article class="card hitarea" :class="props.type">
    <a :href="props.url" target="_blank">
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

      <h1>{{ props.title }}</h1>
      <h2 v-if="props.subTitle">{{ props.subTitle }}</h2>
      <p class="small">{{ props.text }}</p>
      <p class="small"><a class="link" :href="props.url" target="_blank">Visit {{ props.type }}</a></p>
    </a>
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
      margin: 10px;
      padding: 10px;
      border-bottom: 0;

      transition: background var(--transition-short);

      &:hover {
        background-color: var(--color-bg-hover);
      }
    }

    @include min-md {
      width: 300px;
    }

    img {
      width: 100%;
      height: 160px;
      margin-bottom: 30px;

      object-fit: cover;
    }

    h1 {
      margin-bottom: 20px;

      font-size: var(--h2);
    }

    h2 {
      font-size: var(--h4);
      font-style: italic;
      color: var(--color-text-20);
    }

    &.profile {
      h1 {
        margin-bottom: 0;
      }
    }

    &.hitarea > a {
      color: inherit;

      > *:last-child {
        margin-bottom: 0;
      }
    }

    .link {
      text-transform: capitalize;

      @include min-md {
        display: none;
      }
    }
  }
</style>

<script>
  export default {
    name: 'Card',

    props: {
      type: {
        type: String,
        required: true
      },

      title: {
        type: String,
        required: true
      },

      subTitle: {
        type: String,
        default: ''
      },

      url: {
        type: String,
        default: ''
      },

      text: {
        type: String,
        required: true
      },
    }
  };
</script>