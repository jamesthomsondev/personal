import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Carousel from '@/components/Carousel.vue';

const localVue = createLocalVue();

describe('Carousel.vue', () => {
  let wrapper;

  beforeEach (() => {
    wrapper = shallowMount(Carousel, { 
      localVue,
      propsData: {
        items: []
      }
    });
  });

  afterEach(() => wrapper.destroy())

  it ('Renders the component', () => {
    const el = wrapper.find('.carousel');
    expect(el.exists()).to.be.true;
  });
});