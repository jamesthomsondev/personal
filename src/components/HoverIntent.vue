<script>
  import { Indicator } from '@/services/Indicator';

  let isActive = false;
  let progressIndicator = null;
  let timerIn = null;
  let timerOut = null;

  export default {
    name: 'HoverIntent',

    props: {
      ms: {
        type: Object,
        default: () => ({
          in: 250,
          out: 250
        })
      }
    },

    methods: {
      handleIn (e) {
        clearTimeout(timerOut);

        timerIn = setTimeout(() => {
          if (!isActive) {
            console.log('in');
            this.$emit('in');

            isActive = true;
          }
          
          if (progressIndicator) progressIndicator.kill();
        }, this.ms.in);

        if (!isActive) progressIndicator = new Indicator({ duration: this.ms.in, easing: 'cubic-bezier(0.8, 0.8, 0, 1)', event: e });
      },

      handleOut () {
        clearTimeout(timerIn);

        if (progressIndicator) progressIndicator.kill();

        timerOut = setTimeout(() => {
          if (isActive) {
            console.log('out');
            this.$emit('out');
            isActive = false;
          }
        }, this.ms.out);
      }
    },

    render (h) {
      return h('div', {
        on: {
          mouseenter: this.handleIn,
          mouseleave: this.handleOut
        }
      }, this.$slots.default)
    }
  };
</script>