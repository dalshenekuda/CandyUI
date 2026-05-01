import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render as button element by default', () => {
      const wrapper = mount(Button, {
        slots: { default: 'Click me' },
      });
      expect(wrapper.find('button').exists()).toBe(true);
      expect(wrapper.text()).toBe('Click me');
    });

    it('should render as div when type is "block"', () => {
      const wrapper = mount(Button, {
        props: { type: 'block' },
        slots: { default: 'Block content' },
      });
      expect(wrapper.find('div.block-action').exists()).toBe(true);
      expect(wrapper.find('button').exists()).toBe(false);
      expect(wrapper.text()).toBe('Block content');
    });

    it('should render slot content', () => {
      const wrapper = mount(Button, {
        slots: { default: '<span>Custom content</span>' },
      });
      expect(wrapper.html()).toContain('Custom content');
    });
  });

  describe('Props', () => {
    it('should apply dark color style by default', () => {
      const wrapper = mount(Button);
      expect(wrapper.classes()).toContain('style-dark');
    });

    it('should apply light color style when colorStyle="light"', () => {
      const wrapper = mount(Button, {
        props: { colorStyle: 'light' },
      });
      expect(wrapper.classes()).toContain('style-light');
      expect(wrapper.classes()).not.toContain('style-dark');
    });

    it('should apply filled class by default', () => {
      const wrapper = mount(Button);
      expect(wrapper.classes()).toContain('filled');
    });

    it('should apply transparent class when transparent=true', () => {
      const wrapper = mount(Button, {
        props: { transparent: true },
      });
      expect(wrapper.classes()).toContain('transparent');
      expect(wrapper.classes()).not.toContain('filled');
    });

    it('should be disabled when disabled=true', () => {
      const wrapper = mount(Button, {
        props: { disabled: true },
      });
      expect(wrapper.find('button').attributes('disabled')).toBeDefined();
    });

    it('should not be disabled by default', () => {
      const wrapper = mount(Button);
      expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
    });
  });

  describe('Events', () => {
    it('should emit click event when clicked', async () => {
      const wrapper = mount(Button);
      await wrapper.trigger('click');
      expect(wrapper.emitted()).toHaveProperty('click');
      expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('should pass MouseEvent to click handler', async () => {
      const wrapper = mount(Button);
      await wrapper.trigger('click');
      const emittedEvent = wrapper.emitted('click')?.[0]?.[0];
      expect(emittedEvent).toBeInstanceOf(MouseEvent);
    });

    it('should have stopPropagation prop default to false', () => {
      const wrapper = mount(Button);
      expect(wrapper.props('stopPropagation')).toBe(false);
    });

    it('should accept stopPropagation prop', () => {
      const wrapper = mount(Button, {
        props: { stopPropagation: true },
      });
      expect(wrapper.props('stopPropagation')).toBe(true);
    });
  });

  describe('Type variations', () => {
    it('should work as block with click events', async () => {
      const wrapper = mount(Button, {
        props: { type: 'block' },
      });
      await wrapper.find('.block-action').trigger('click');
      expect(wrapper.emitted()).toHaveProperty('click');
    });

    it('should apply same classes to block as button', () => {
      const buttonWrapper = mount(Button, {
        props: { type: 'button', colorStyle: 'light', transparent: true },
      });
      const blockWrapper = mount(Button, {
        props: { type: 'block', colorStyle: 'light', transparent: true },
      });
      expect(blockWrapper.classes()).toContain('style-light');
      expect(blockWrapper.classes()).toContain('transparent');
      expect(buttonWrapper.classes()).toContain('style-light');
      expect(buttonWrapper.classes()).toContain('transparent');
    });
  });

  describe('Class combinations', () => {
    it('should have correct classes for dark filled button', () => {
      const wrapper = mount(Button, {
        props: { colorStyle: 'dark', transparent: false },
      });
      expect(wrapper.classes()).toContain('style-dark');
      expect(wrapper.classes()).toContain('filled');
    });

    it('should have correct classes for dark transparent button', () => {
      const wrapper = mount(Button, {
        props: { colorStyle: 'dark', transparent: true },
      });
      expect(wrapper.classes()).toContain('style-dark');
      expect(wrapper.classes()).toContain('transparent');
    });

    it('should have correct classes for light transparent button', () => {
      const wrapper = mount(Button, {
        props: { colorStyle: 'light', transparent: true },
      });
      expect(wrapper.classes()).toContain('style-light');
      expect(wrapper.classes()).toContain('transparent');
    });
  });
});
