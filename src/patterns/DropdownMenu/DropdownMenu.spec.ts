import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DropdownMenu from './DropdownMenu.vue';
import { DropdownMenuLabel } from './DropdownMenuLabel';
import { DropdownMenuSeparator } from './DropdownMenuSeparator';

describe('DropdownMenu', () => {
  describe('Rendering', () => {
    it('should render trigger slot', () => {
      const wrapper = mount(DropdownMenu, {
        slots: {
          trigger: '<button>Open Menu</button>',
        },
      });

      expect(wrapper.html()).toContain('Open Menu');
    });

    it('should render with complex trigger', () => {
      const wrapper = mount(DropdownMenu, {
        slots: {
          trigger: `
            <button class="custom-trigger">
              <span>Actions</span>
              <svg class="chevron"></svg>
            </button>
          `,
        },
      });

      expect(wrapper.html()).toContain('custom-trigger');
      expect(wrapper.html()).toContain('Actions');
    });
  });

  describe('Props', () => {
    it('should use default side (bottom)', () => {
      const wrapper = mount(DropdownMenu, {
        slots: {
          trigger: '<button>Menu</button>',
        },
      });

      expect(wrapper.props('side')).toBe('bottom');
    });

    it('should accept custom side prop', () => {
      const wrapper = mount(DropdownMenu, {
        props: {
          side: 'top',
        },
        slots: {
          trigger: '<button>Menu</button>',
        },
      });

      expect(wrapper.props('side')).toBe('top');
    });

    it('should accept all valid side values', () => {
      const sides: Array<'top' | 'right' | 'bottom' | 'left'> = ['top', 'right', 'bottom', 'left'];

      sides.forEach((side) => {
        const wrapper = mount(DropdownMenu, {
          props: { side },
          slots: {
            trigger: '<button>Menu</button>',
          },
        });

        expect(wrapper.props('side')).toBe(side);
      });
    });

    it('should use default sideOffset (5)', () => {
      const wrapper = mount(DropdownMenu, {
        slots: {
          trigger: '<button>Menu</button>',
        },
      });

      expect(wrapper.props('sideOffset')).toBe(5);
    });

    it('should accept custom sideOffset', () => {
      const wrapper = mount(DropdownMenu, {
        props: {
          sideOffset: 10,
        },
        slots: {
          trigger: '<button>Menu</button>',
        },
      });

      expect(wrapper.props('sideOffset')).toBe(10);
    });

    it('should use default align (end)', () => {
      const wrapper = mount(DropdownMenu, {
        slots: {
          trigger: '<button>Menu</button>',
        },
      });

      expect(wrapper.props('align')).toBe('end');
    });

    it('should accept custom align', () => {
      const wrapper = mount(DropdownMenu, {
        props: {
          align: 'start',
        },
        slots: {
          trigger: '<button>Menu</button>',
        },
      });

      expect(wrapper.props('align')).toBe('start');
    });

    it('should accept all valid align values', () => {
      const alignments: Array<'start' | 'center' | 'end'> = ['start', 'center', 'end'];

      alignments.forEach((align) => {
        const wrapper = mount(DropdownMenu, {
          props: { align },
          slots: {
            trigger: '<button>Menu</button>',
          },
        });

        expect(wrapper.props('align')).toBe(align);
      });
    });
  });

  describe('Component Structure', () => {
    it('should render without errors', () => {
      const wrapper = mount(DropdownMenu, {
        slots: {
          trigger: '<button>Menu</button>',
        },
      });

      expect(wrapper.exists()).toBe(true);
    });

    it('should handle empty menu', () => {
      const wrapper = mount(DropdownMenu, {
        slots: {
          trigger: '<button>Empty Menu</button>',
        },
      });

      expect(wrapper.exists()).toBe(true);
      expect(wrapper.html()).toContain('Empty Menu');
    });
  });
});

describe('DropdownMenuLabel', () => {
  describe('Rendering', () => {
    it('should render without errors', () => {
      const wrapper = mount(DropdownMenuLabel, {
        slots: {
          default: 'Actions',
        },
      });

      expect(wrapper.exists()).toBe(true);
    });

    it('should handle empty content', () => {
      const wrapper = mount(DropdownMenuLabel, {
        slots: {
          default: '',
        },
      });

      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('Styling', () => {
    it('should have correct CSS classes', () => {
      const wrapper = mount(DropdownMenuLabel, {
        slots: {
          default: 'Label',
        },
      });

      expect(wrapper.classes()).toContain('text-xs');
      expect(wrapper.classes()).toContain('font-semibold');
      expect(wrapper.classes()).toContain('text-secondary');
    });

    it('should have correct padding classes', () => {
      const wrapper = mount(DropdownMenuLabel, {
        slots: {
          default: 'Label',
        },
      });

      expect(wrapper.classes()).toContain('px-s');
      expect(wrapper.classes()).toContain('py-xxxs');
    });
  });
});

describe('DropdownMenuSeparator', () => {
  describe('Rendering', () => {
    it('should render as a separator element', () => {
      const wrapper = mount(DropdownMenuSeparator);

      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('Styling', () => {
    it('should have correct CSS classes', () => {
      const wrapper = mount(DropdownMenuSeparator);

      expect(wrapper.classes()).toContain('my-xxxs');
      expect(wrapper.classes()).toContain('px-s');
    });

    it('should render Divider component inside', () => {
      const wrapper = mount(DropdownMenuSeparator);

      expect(wrapper.html()).toContain('divider');
    });
  });
});
