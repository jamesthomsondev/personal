<template>
  <article class="showcase">
    <hero />

    <div class="showcase__body">
      <h1>Casino.eu</h1>
      <h2>JavaScript, Vue, Webpack, Pusher, HTML, CSS, GSAP</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio sapien, cursus sed consectetur ut, efficitur ut erat. Integer sed elit ullamcorper, ultricies lectus vel, fringilla lectus. Nam lobortis porttitor metus. Fusce commodo blandit nisi, a egestas orci semper egestas. Curabitur sodales et sapien non sagittis. Duis rutrum ornare nunc, et cursus lectus elementum dapibus. Phasellus dignissim semper odio, ac aliquam enim vestibulum et. Donec neque mi, ullamcorper non turpis sed, mollis maximus libero. Duis at ante consequat, dictum leo eget, faucibus orci. Donec ut purus efficitur lectus gravida lacinia a sed quam. Phasellus vel libero risus. Etiam id ante sem.</p>
      <p><a href="#">Visit Live Site</a></p>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .showcase__body {
    max-width: 700px;
    margin: 0 auto 20vw;
    padding: 0 20px;

    @include min-sm {
      margin: 0 auto 100px;
      padding: 0;
    }

    h1 {
      margin-bottom: 0;
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
  import Hero from '@/components/Hero';

  export default {
    name: 'Showcase',

    components: {
      Hero
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