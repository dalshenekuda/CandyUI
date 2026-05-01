import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ContentPlate from './ContentPlate.vue';

const meta: Meta<typeof ContentPlate> = {
  title: 'Primitives/ContentPlate',
  component: ContentPlate,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A structural primitive providing a rounded, bordered card container. Used extensively as a base layer for widgets like PriceBlock or empty state additions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentPlate>;

export const AddCO2Refills: Story = {
  render: () => ({
    components: { ContentPlate },
    template: `
      <div style="max-width: 400px;">
        <ContentPlate>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 14px;">add CO2 refills to your subscription</span>
            <button style="border: 1.5px solid #002238; border-radius: 20px; padding: 6px 16px; background: transparent; font-weight: 600; font-size: 13px; cursor: pointer;">add</button>
          </div>
        </ContentPlate>
      </div>
    `,
  }),
};

export const AddFlavors: Story = {
  render: () => ({
    components: { ContentPlate },
    template: `
      <div style="max-width: 400px;">
        <ContentPlate>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 14px;">add flavors to your subscription</span>
            <button style="border: 1.5px solid #002238; border-radius: 20px; padding: 6px 16px; background: transparent; font-weight: 600; font-size: 13px; cursor: pointer;">add</button>
          </div>
        </ContentPlate>
      </div>
    `,
  }),
};
