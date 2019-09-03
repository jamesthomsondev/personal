<template functional>
  <div class="job">
    <div class="years">
      <span v-for="year in props.years" :key="year">{{ year }}</span>
    </div>
    <h3>{{ props.title }}</h3>
    <h4>{{ props.company }}</h4>
    <ul>
      <li v-for="(item, index) in props.list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .job {
    position: relative;
    margin: 0 20px;
    padding: 0 0 30px 20px;
    border-left: 2px solid var(--color-bg-inverse);
  
    &:last-child {
      margin-bottom: 60px;

      @include min-sm {
        margin-bottom: 0px;
      }
    }

    @include min-sm {
      margin-left: 12.5rem;
      padding-bottom: 60px;
    }

    h3 {
      margin-bottom: 0;
      font-size: 3.6rem;
    }

    h4 {
      margin-bottom: 20px;
      font-size: 2.6rem;
      color: var(--color-text-20);
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        margin: 0 0 20px 20px;

        font-size: var(--p);
        list-style-type: disc;
      }
    }

    .years {
      margin-bottom: 20px;
      border-top: 2px solid var(--color-bg-inverse);
      border-bottom: 2px solid var(--color-bg-inverse);

      @include min-sm {
        position: absolute;
        left: -10.5rem;
        border: 0;
      }

      span {
        display: inline-block;
        height: 24px;
        margin: 5px 0;
        font-size: var(--h3);

        @include min-sm {
          display: block;
          height: auto;
          margin: 0;
          font-size: 4.2rem;
        }

        + span {
          margin-left: 5px;

          @include min-sm {
            margin-left: 0;
          }
        }


        $colors-list: var(--color-text-50) var(--color-text-40) var(--color-text-20) var(--color-text-10);
        @each $current-color in $colors-list {
          $i: index($colors-list, $current-color);
          
          &:nth-child(#{$i}) { 
            color: $current-color;
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    name: 'Job',

    props: {
      title: {
        type: String,
        required: true
      },

      company: {
        type: String,
        required: true
      },

      years: {
        type: Array,
        required: true
      },

      list: {
        type: Array,
        required: true
      }
    }
  };
</script>