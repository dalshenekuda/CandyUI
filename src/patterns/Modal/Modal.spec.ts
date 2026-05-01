import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Modal from './Modal.vue';

describe('Modal', () => {
  describe('Rendering', () => {
    it('should not render content when modelValue is false', () => {
      const wrapper = mount(Modal, {
        props: { modelValue: false },
        attachTo: document.body,
      });
      expect(wrapper.find('.modal-wrapper').exists()).toBe(false);
    });

    it('should render content when modelValue is true', async () => {
      mount(Modal, {
        props: { modelValue: true },
        attachTo: document.body,
      });
      await Promise.resolve();
      expect(document.querySelector('.modal-wrapper')).not.toBeNull();
    });

    it('should render body slot content when open', async () => {
      mount(Modal, {
        props: { modelValue: true },
        slots: { body: '<p class="test-body">Body content</p>' },
        attachTo: document.body,
      });
      await Promise.resolve();
      const bodyEl = document.querySelector('.test-body');
      expect(bodyEl).not.toBeNull();
      expect(bodyEl?.textContent).toContain('Body content');
    });

    it('should render header slot content when open', async () => {
      mount(Modal, {
        props: { modelValue: true },
        slots: { header: '<h2 class="test-header">Title</h2>' },
        attachTo: document.body,
      });
      await Promise.resolve();
      expect(document.querySelector('.modal-header')).not.toBeNull();
      expect(document.querySelector('.test-header')).not.toBeNull();
    });

    it('should not render header section when header slot is empty', () => {
      const wrapper = mount(Modal, {
        props: { modelValue: true },
        attachTo: document.body,
      });
      expect(wrapper.find('.modal-header').exists()).toBe(false);
    });

    it('should render footer slot content when open', async () => {
      mount(Modal, {
        props: { modelValue: true },
        slots: { footer: '<button class="test-footer-btn">Confirm</button>' },
        attachTo: document.body,
      });
      await Promise.resolve();
      expect(document.querySelector('.test-footer-btn')).not.toBeNull();
    });
  });

  describe('Props', () => {
    it('should apply md size class', async () => {
      mount(Modal, {
        props: { modelValue: true, size: 'md' },
        attachTo: document.body,
      });
      await Promise.resolve();
      expect(document.querySelector('.modal-md')).not.toBeNull();
    });

    it('should apply lg size class by default', async () => {
      mount(Modal, {
        props: { modelValue: true },
        attachTo: document.body,
      });
      await Promise.resolve();
      expect(document.querySelector('.modal-lg')).not.toBeNull();
    });

    it('should apply xl size class', async () => {
      mount(Modal, {
        props: { modelValue: true, size: 'xl' },
        attachTo: document.body,
      });
      await Promise.resolve();
      expect(document.querySelector('.modal-xl')).not.toBeNull();
    });

    it('should apply full size class', async () => {
      mount(Modal, {
        props: { modelValue: true, size: 'full' },
        attachTo: document.body,
      });
      await Promise.resolve();
      expect(document.querySelector('.modal-full')).not.toBeNull();
    });

    it('should render aria title for screen readers', async () => {
      mount(Modal, {
        props: { modelValue: true, ariaTitle: 'My Modal' },
        attachTo: document.body,
      });
      await Promise.resolve();
      const title = document.querySelector('.sr-only')?.textContent ?? '';
      expect(title).not.toBe('');
    });
  });

  describe('Events', () => {
    it('should emit update:modelValue when open state changes', async () => {
      const wrapper = mount(Modal, {
        props: { modelValue: true },
        attachTo: document.body,
      });
      await wrapper.findComponent({ name: 'DialogRoot' }).vm.$emit('update:open', false);
      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
    });
  });
});
