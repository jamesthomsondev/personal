import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import HoverIntent from '@/components/HoverIntent.vue';

const localVue = createLocalVue();

describe('HoverIntent.vue', () => {
  let wrapper;

  beforeEach (() => {
    wrapper = shallowMount(HoverIntent, { 
      localVue
    });
  });

  afterEach(() => wrapper.destroy())

  it ('Renders the component', () => {
    const el = wrapper.find('div');
    expect(el.exists()).to.be.true;
  });

  it ('Accepts an ms in prop', () => {
    wrapper.setProps({ 
      ms: { 
        in: 500, 
      }
    });

    expect(wrapper.props('ms').in).to.equal(500);
  });

  it ('Accepts an ms out prop', () => {
    wrapper.setProps({ 
      ms: { 
        out: 0
      }
    });

    expect(wrapper.props('ms').out).to.equal(0);
  });

  it ('Emits an in event on mouseenter', () => {
    wrapper.setProps({ 
      ms: { 
        in: 0, 
        out: 0
      }
    });

    wrapper.trigger('mouseenter');

    expect(wrapper.emitted('in')).to.be.ok;
  });

  it ('Emits an out event on mouseleave', () => {
    wrapper.trigger('mouseleave');

    expect(wrapper.emitted('out')).to.be.ok;
  });
});