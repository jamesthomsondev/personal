<template>
  <hover-intent :ms="{ in: 1000, out: 500 }" color="var(--color-bg)" @in="handleIn" @out="handleOut">
    <div class="carousel" :class="{ 'is-active': isActive }" @keyup.37="previous" @keyup.39="next">
      <div class="carousel__controls">
        <button class="carousel__controls-previous button" @click="previous">
          <icon-chevron-left class="carousel__controls-icon" />
        </button>
        <button class="carousel__controls-next button" @click="next" ref="next">
          <icon-chevron-right class="carousel__controls-icon" />
        </button>
      </div>
      <div class="carousel__body">
        <transition name="fade" mode="in-out">
          <component :is="currentSlide" />
        </transition>
      </div>
    </div>
  </hover-intent>
</template>

<style scoped lang="scss">
  .carousel {
    position: relative;
    overflow: hidden;
    height: 50vw;
    margin-bottom: 10%;

    background-color: var(--color-bg-inverse);
    transition: height var(--transition-medium);

    @include min-xs {
      max-width: 700px;
      height: 306px;
      margin: 0 auto 60px;

      transition: max-width var(--transition-medium), height var(--transition-medium);
    }

    &.is-active {
      max-width: 960px;
      height: 260px;

      @include min-sm {
        height: 420px;
      }

      .carousel__controls {
        pointer-events: auto;

        &-previous,
        &-next {
          transform: translateX(0px);
        }
      }
    }

    &:not(.is-active) {
      cursor: none;
    }
  }

  .carousel__controls {
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    
    width: 100%;
    height: 100%;
    justify-content: space-between;

    pointer-events: none;

    &-previous,
    &-next {
      transition: transform var(--transition-short);
    }

    &-previous {
      padding-left: 20px;
      transform: translateX(-100px);
    }

    &-next {
      padding-right: 20px;
      transform: translateX(100px);
    }

    &-icon {
      transform: scale(0.5);

      @include min-xs {
        transform: scale(1);
      }
    }
  }

  .carousel__body {
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    height: 100%;

    .slide {
      position: absolute;
      z-index: 1;
      width: 100%;
      object-fit: contain;

      @include min-xs {
        object-fit: none;
      }
    }
  }

  .fade-enter-active, 
  .fade-leave-active {
    transition: opacity var(--transition-long) ease;
  }

  .fade-enter, 
  .fade-leave-to {
    opacity: 0;
  }
</style>

<script>
  import HoverIntent from './HoverIntent';
  import IconChevronLeft from './IconChevronLeft';
  import IconChevronRight from './IconChevronRight';

  import { clone } from '@/utilities';

  export default {
    name: 'Carousel',

    components: {
      HoverIntent,
      IconChevronLeft,
      IconChevronRight
    },

    props: {
      items: {
        type: Array,
        required: true
      }
    },

    data: (vm) => ({
      isActive: false,
      images: clone(vm.items)
    }),

    computed: {
      currentSlide () {
        return this.images[0];
      }
    },

    methods: {
      previous () {
        let last = this.images.pop();
        this.images.unshift(last);
      },

      next () {
        let first = this.images.shift();
        this.images.push(first);
      },

      handleIn () {
        this.isActive = true;

        // If we focus the button too early, the carousel transition becomes jumpy
        // adding a slight delay to focus fixes this without any UX repercussions
        setTimeout(() => {
          this.$refs.next.focus();
        }, 500); 
      },

      handleIn () {
        this.isActive = false
      }
    },

    created () {
      this.images = this.images.map((url) => ({
        name: 'Slide',
        template: `
          <img class="slide" 
            src="${ url }?nf_resize=fit&w=960&q=100" 
            srcset="  
              ${ url }?nf_resize=fit&w=640&q=100 640w,
              ${ url }?nf_resize=fit&w=960&q=100 960w,
              ${ url }?nf_resize=fit&w=1242&q=100 1242w,
              ${ url }?nf_resize=fit&w=1920&q=100 1920w
            "
            sizes="(min-width: 540px) 960px, 100vw"
            alt=""
          >
        `
      }));
    }
  };
</script>