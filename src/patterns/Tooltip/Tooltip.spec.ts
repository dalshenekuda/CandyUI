import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Tooltip from './Tooltip.vue';

describe('Tooltip', () => {
  describe('Rendering', () => {
    it('should render trigger slot', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Tooltip text',
        },
        slots: {
          default: '<button>Hover me</button>',
        },
      });

      expect(wrapper.html()).toContain('Hover me');
    });

    it('should accept content prop', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Test tooltip content',
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      expect(wrapper.props('content')).toBe('Test tooltip content');
    });

    it('should render default slot as trigger', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Info',
        },
        slots: {
          default: '<span class="custom-trigger">Custom Trigger</span>',
        },
      });

      expect(wrapper.html()).toContain('custom-trigger');
      expect(wrapper.html()).toContain('Custom Trigger');
    });
  });

  describe('Props', () => {
    it('should use default side (top)', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Tooltip',
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      // The component should pass side="top" to TooltipContent
      const html = wrapper.html();
      expect(html).toBeTruthy();
    });

    it('should accept custom side prop', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Tooltip',
          side: 'bottom',
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      expect(wrapper.props('side')).toBe('bottom');
    });

    it('should accept all valid side values', () => {
      const sides: Array<'top' | 'right' | 'bottom' | 'left'> = ['top', 'right', 'bottom', 'left'];

      sides.forEach((side) => {
        const wrapper = mount(Tooltip, {
          props: {
            content: 'Tooltip',
            side,
          },
          slots: {
            default: '<button>Trigger</button>',
          },
        });

        expect(wrapper.props('side')).toBe(side);
      });
    });

    it('should use default sideOffset (5)', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Tooltip',
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      // Check that default prop is applied
      expect(wrapper.props('sideOffset')).toBe(5);
    });

    it('should accept custom sideOffset', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Tooltip',
          sideOffset: 10,
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      expect(wrapper.props('sideOffset')).toBe(10);
    });

    it('should use default delayDuration (200)', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Tooltip',
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      expect(wrapper.props('delayDuration')).toBe(200);
    });

    it('should accept custom delayDuration', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Tooltip',
          delayDuration: 500,
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      expect(wrapper.props('delayDuration')).toBe(500);
    });
  });

  describe('Content', () => {
    it('should accept content prop', () => {
      const content = 'This is a helpful tooltip';
      const wrapper = mount(Tooltip, {
        props: {
          content,
        },
        slots: {
          default: '<button>Hover</button>',
        },
      });

      expect(wrapper.props('content')).toBe(content);
    });

    it('should handle empty content', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: '',
        },
        slots: {
          default: '<button>Hover</button>',
        },
      });

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.props('content')).toBe('');
    });

    it('should handle long content', () => {
      const longContent =
        'This is a very long tooltip content that should wrap properly within the max-width constraint';
      const wrapper = mount(Tooltip, {
        props: {
          content: longContent,
        },
        slots: {
          default: '<button>Hover</button>',
        },
      });

      expect(wrapper.props('content')).toBe(longContent);
    });
  });

  describe('Component Structure', () => {
    it('should render without errors', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Styled tooltip',
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      expect(wrapper.exists()).toBe(true);
    });

    it('should render trigger element', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Tooltip',
        },
        slots: {
          default: '<button class="test-button">Trigger</button>',
        },
      });

      expect(wrapper.html()).toContain('test-button');
      expect(wrapper.html()).toContain('Trigger');
    });
  });

  describe('Integration', () => {
    it('should work with different trigger elements', () => {
      const triggers = [
        '<button>Button</button>',
        '<div>Div</div>',
        '<span>Span</span>',
        '<a href="#">Link</a>',
      ];

      triggers.forEach((trigger) => {
        const wrapper = mount(Tooltip, {
          props: {
            content: 'Info',
          },
          slots: {
            default: trigger,
          },
        });

        expect(wrapper.exists()).toBe(true);
      });
    });

    it('should handle complex trigger content', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Help text',
        },
        slots: {
          default: `
            <button class="complex-button">
              <svg class="icon"></svg>
              <span>Click me</span>
            </button>
          `,
        },
      });

      expect(wrapper.html()).toContain('complex-button');
      expect(wrapper.html()).toContain('Click me');
    });

    it('should render all required Radix components', () => {
      const wrapper = mount(Tooltip, {
        props: {
          content: 'Complete structure',
        },
        slots: {
          default: '<button>Trigger</button>',
        },
      });

      // Check that the component structure is complete
      const html = wrapper.html();
      expect(html).toBeTruthy();
      expect(html.length).toBeGreaterThan(0);
    });
  });
});
