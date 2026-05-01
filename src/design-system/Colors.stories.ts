import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Provides a visual reference for all standard design system colors including primary, secondary, greyscale, and white alpha variants. This is a documentation-only story.',
      },
    },
  },
};
export default meta;

const primaryColors = [1, 2, 3, 4, 5, 6].map((n) => `primary-color-${n}`);
const greyColors = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100].map((n) => `grey-${n}`);
const secondaryGroups = [1, 2, 3, 4, 5, 6].map((n) => [
  `secondary-color-${n}-dark`,
  `secondary-color-${n}-base`,
  `secondary-color-${n}-light`,
]);
const whiteAlpha = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map((n) => `white-alpha-${n}`);

const swatchTemplate = `
  <div style="display:flex; flex-direction:column; align-items:center; gap:6px; min-width:80px;">
    <div :style="{
      width: '72px',
      height: '56px',
      borderRadius: '8px',
      background: 'var(--' + color + ')',
      border: '1px solid rgba(0,0,0,0.1)',
    }"></div>
    <span style="font-size:11px; color:#555; text-align:center; word-break:break-all; max-width:80px;">{{ color }}</span>
  </div>
`;

export const Primary: StoryObj = {
  render: () => ({
    setup: () => ({ colors: primaryColors }),
    template: `
      <div>
        <h3 style="font-family:sans-serif; margin-bottom:16px;">Primary</h3>
        <div style="display:flex; flex-wrap:wrap; gap:12px;">
          <template v-for="color in colors" :key="color">
            ${swatchTemplate}
          </template>
        </div>
      </div>
    `,
  }),
};

export const Grey: StoryObj = {
  render: () => ({
    setup: () => ({ colors: greyColors }),
    template: `
      <div>
        <h3 style="font-family:sans-serif; margin-bottom:16px;">Grey Scale</h3>
        <div style="display:flex; flex-wrap:wrap; gap:12px;">
          <template v-for="color in colors" :key="color">
            ${swatchTemplate}
          </template>
        </div>
      </div>
    `,
  }),
};

export const Secondary: StoryObj = {
  render: () => ({
    setup: () => ({ groups: secondaryGroups }),
    template: `
      <div style="font-family:sans-serif;">
        <h3 style="margin-bottom:16px;">Secondary</h3>
        <div style="display:flex; flex-direction:column; gap:20px;">
          <div v-for="(group, i) in groups" :key="i">
            <div style="font-size:12px; color:#888; margin-bottom:8px;">Group {{ i + 1 }}</div>
            <div style="display:flex; gap:12px;">
              <template v-for="color in group" :key="color">
                ${swatchTemplate}
              </template>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WhiteAlpha: StoryObj = {
  render: () => ({
    setup: () => ({ colors: whiteAlpha }),
    template: `
      <div>
        <h3 style="font-family:sans-serif; margin-bottom:16px;">White Alpha</h3>
        <div style="display:flex; flex-wrap:wrap; gap:12px; background:#333; padding:16px; border-radius:12px;">
          <template v-for="color in colors" :key="color">
            <div style="display:flex; flex-direction:column; align-items:center; gap:6px; min-width:80px;">
              <div :style="{
                width: '72px',
                height: '56px',
                borderRadius: '8px',
                background: 'var(--' + color + ')',
                border: '1px solid rgba(255,255,255,0.2)',
              }"></div>
              <span style="font-size:11px; color:#ccc; text-align:center; word-break:break-all; max-width:80px;">{{ color }}</span>
            </div>
          </template>
        </div>
      </div>
    `,
  }),
};
