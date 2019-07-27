<template>
  <aside>
    <h3>Knowledge</h3>
    <ul>
      <li>JavaScript (es6+)</li>
      <li>Vue</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Webpack</li>
      <li>Node.js</li>
      <li>GSAP</li>
      <li>Git</li>
      <li>SVG</li>
      <li>WebSockets</li>
      <li>Express</li>
    </ul>

    <ul>
      <li>JavaScript (es6+)</li>
      <li>Vue</li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Webpack</li>
      <li>Node.js</li>
      <li>GSAP</li>
      <li>Git</li>
      <li>SVG</li>
      <li>WebSockets</li>
      <li>Express</li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
  aside {
    margin: 0 20px;
  }

  h3 {
    margin-bottom: 20px;
  }

  ul {
    margin: 0 0 60px;
    padding: 0 0 0 15px;
    border-left: 2px solid var(--color-bg-inverse);

    li {
      margin-bottom: 10px;
      list-style-type: none;

      font-size: var(--p);

      @include min-sm {
        font-size: var(--small);
      }
    }
  }
</style>

<script>
  export default {
    name: 'Skillset',

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