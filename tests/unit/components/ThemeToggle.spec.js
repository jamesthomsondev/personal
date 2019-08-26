import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ThemeToggle from '@/components/ThemeToggle.vue';

const localVue = createLocalVue();

describe('ThemeToggle', () => {
  let wrapper;

  beforeEach (() => {
    wrapper = shallowMount(ThemeToggle, { 
      localVue
    });
  });

  it ('Renders the component', () => {
    const el = wrapper.find('.toggle');

    expect(el.exists()).to.be.true;
  });

  it ('Toggles to dark theme when clicked', () => {
    const el = wrapper.find('.toggle');

    wrapper.vm.toggle();

    expect(el.classes('toggle--is-dark')).to.be.true;
  });
})
