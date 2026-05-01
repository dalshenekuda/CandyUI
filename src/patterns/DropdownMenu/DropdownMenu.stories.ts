import type { Meta, StoryObj } from '@storybook/vue3-vite';
import DropdownMenu from '@/patterns/DropdownMenu/DropdownMenu.vue';
import DropdownMenuItem from '@/patterns/DropdownMenu/DropdownMenuItem/DropdownMenuItem.vue';
import DropdownMenuSeparator from '@/patterns/DropdownMenu/DropdownMenuSeparator/DropdownMenuSeparator.vue';
import Button from '@/primitives/Button/Button.vue';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Patterns/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown menu with accessible keyboard navigation built on Reka UI. This updated variant is focused on a clean list of text actions, matching the latest delivery update menu design.',
      },
    },
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Controls on which side of the trigger the menu opens.',
      table: { category: 'State' },
    },
    sideOffset: {
      control: 'number',
      description: 'Defines distance between trigger and menu content.',
      table: { category: 'Appearance' },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Controls horizontal alignment against the trigger.',
      table: { category: 'Appearance' },
    },
    trigger: {
      table: { category: 'Slots', type: { summary: 'VNode' } },
      description: 'Slot for the element that toggles the dropdown menu.',
    },
    default: {
      table: { category: 'Slots', type: { summary: 'VNode' } },
      description:
        'Slot for dropdown menu actions rendered as a list of DropdownMenuItem components.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

const DELIVERY_MENU_ITEMS = [
  'Get it sooner',
  'Change delivery date',
  'Skip this delivery',
  'Add one-time products',
  'Remove products from this delivery',
] as const;

/** Default delivery update dropdown matching the latest design. */
export const DeliveryUpdate: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuItem,
      DropdownMenuSeparator,
      Button,
    },
    setup() {
      const handleSelect = (action: string) => console.log('Selected:', action);
      return { handleSelect, DELIVERY_MENU_ITEMS };
    },
    template: `
      <div class="flex items-center justify-center h-64">
        <DropdownMenu>
          <template #trigger>
            <Button colorStyle="dark">update</Button>
          </template>
          <template v-for="(item, index) in DELIVERY_MENU_ITEMS" :key="item">
            <DropdownMenuItem @select="handleSelect(item)">
              {{ item }}
            </DropdownMenuItem>
            <DropdownMenuSeparator v-if="index < DELIVERY_MENU_ITEMS.length - 1" />
          </template>
        </DropdownMenu>
      </div>
    `,
  }),
};

/** Delivery update dropdown showcasing disabled and destructive states. */
export const DeliveryUpdateWithDisabled: Story = {
  render: () => ({
    components: { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, Button },
    setup() {
      const handleSelect = (action: string) => console.log('Selected:', action);
      return { handleSelect };
    },
    template: `
      <div class="flex items-center justify-center h-64">
        <DropdownMenu>
          <template #trigger>
            <Button colorStyle="dark">update</Button>
          </template>
          <DropdownMenuItem @select="handleSelect('Get it sooner')">Get it sooner</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem @select="handleSelect('Change delivery date')">Change delivery date</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>Skip this delivery</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem @select="handleSelect('Add one-time products')">Add one-time products</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem destructive @select="handleSelect('Remove products from this delivery')">
            Remove products from this delivery
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    `,
  }),
};
