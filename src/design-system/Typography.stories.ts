import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Provides a visual reference for the design system typography scale, showcasing headings, body text, and button text variants with their respective font sizes and weights. This is a documentation-only story.',
      },
    },
  },
};
export default meta;

const typeRoles = [
  { cls: 'typo-h1', label: 'H1 Headline', description: 'Bold · 61px desktop / 42px mobile' },
  { cls: 'typo-h2', label: 'H2 Headline', description: 'Bold · 49px desktop / 35px mobile' },
  { cls: 'typo-h3', label: 'H3 Headline', description: 'Bold · 39px desktop / 29px mobile' },
  { cls: 'typo-h4', label: 'H4 Headline', description: 'Bold · 31px desktop / 24px mobile' },
  { cls: 'typo-s1', label: 'S1 Subtitle', description: 'Light · 25px desktop / 20px mobile' },
  { cls: 'typo-s2', label: 'S2 Subtitle', description: 'Regular · 20px desktop / 17px mobile' },
  { cls: 'typo-b1', label: 'B1 Body', description: 'Light · 18px desktop / 15px mobile' },
  { cls: 'typo-b2', label: 'B2 Body', description: 'Light · 16px desktop / 14px mobile' },
  { cls: 'typo-b3', label: 'B3 Body', description: 'Light · 14px desktop / 13px mobile' },
  {
    cls: 'typo-c1',
    label: 'C1 Caption',
    description: 'Light/Regular · 13px desktop / 12px mobile',
  },
  { cls: 'typo-credit', label: 'Credit', description: 'Medium · 10px · letter-spacing 2px' },
  { cls: 'typo-button-large', label: 'Button Large', description: 'Semi Bold · 16px' },
  { cls: 'typo-button-medium', label: 'Button Medium', description: 'Semi Bold · 14px' },
  { cls: 'typo-button-small', label: 'Button Small', description: 'Semi Bold · 12px' },
];

export const Scale: StoryObj = {
  render: () => ({
    setup: () => ({ roles: typeRoles }),
    template: `
      <div style="font-family: Inter, sans-serif; padding: 24px; display:flex; flex-direction:column; gap:0;">
        <div
          v-for="role in roles"
          :key="role.cls"
          style="display:grid; grid-template-columns:160px 1fr; align-items:baseline; gap:24px; padding:20px 0; border-bottom:1px solid #e8e9ea;"
        >
          <div>
            <div style="font-size:12px; font-weight:600; color:#002349; margin-bottom:2px;">{{ role.cls }}</div>
            <div style="font-size:11px; color:#9a9ca3;">{{ role.description }}</div>
          </div>
          <div :class="role.cls" style="color: var(--primary-color-1);">
            {{ role.label }}
          </div>
        </div>
      </div>
    `,
  }),
};
