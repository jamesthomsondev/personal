import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ThemeToggle from '@/components/ThemeToggle.vue';

window.matchMedia = () => ({});

const localVue = createLocalVue();

describe('ThemeToggle', () => {
  let wrapper;

  beforeEach (() => {
    wrapper = shallowMount(ThemeToggle, { 
      localVue
    });
  });

  afterEach(() => wrapper.destroy());

  it ('Renders the component', () => {
    const el = wrapper.find('.toggle');

    expect(el.exists()).to.be.true;
  });

  it ('Switches to dark theme', () => {
    const el = wrapper.find('.toggle');

    wrapper.vm.setAsDark();

    expect(el.classes('toggle--is-dark')).to.be.true;
  });

  it ('Switches to light them', () => {
    const el = wrapper.find('.toggle');

    wrapper.vm.setAsLight();

    expect(el.classes('toggle--is-light')).to.be.true;
  });
})
