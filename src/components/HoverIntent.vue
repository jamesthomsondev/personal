<script>
  import { Indicator } from '@/services/Indicator';

  let timerIn = null;
  let timerOut = null;

  export default {
    name: 'HoverIntent',

    props: {
      color: {
        type: String,
        default: 'white'
      },

      ms: {
        type: Object,
        default: () => ({
          in: 250,
          out: 250
        })
      }
    },

    data: () => ({
      isActive: false
    }),

    methods: {
      handleIn (e) {
        clearTimeout(timerOut);

        timerIn = setTimeout(() => {
          if (!this.isActive) {
            console.log('in');
            this.$emit('in');

            this.isActive = true;
          }
          
          if (this.progressIndicator) {this.progressIndicator.kill(); this.progressIndicator = null; console.log(this.progressIndicator);}
        }, this.ms.in - 200);

        if (!this.isActive) this.progressIndicator = new Indicator({ color: this.color, duration: this.ms.in, easing: 'cubic-bezier(0.8, 0.8, 0, 1)', event: e });
      },

      handleOut () {
        clearTimeout(timerIn);

        if (this.progressIndicator) {this.progressIndicator.kill(); this.progressIndicator = null; console.log(this.progressIndicator);}

        timerOut = setTimeout(() => {
          if (this.isActive) {
            console.log('out');
            this.$emit('out');
            this.isActive = false;
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