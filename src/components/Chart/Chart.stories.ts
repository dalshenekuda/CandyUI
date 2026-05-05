import type { Meta, StoryObj } from '@storybook/react'
import { ChartContainer } from './Chart'

const meta: Meta<typeof ChartContainer> = {
  title: 'Components/Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Chart wrapper built on Recharts + shadcn. Provides a ChartContext for config-driven color theming, a styled tooltip (ChartTooltipContent), and a legend (ChartLegendContent). Pass `config` to map series keys to labels and colors.',
      },
    },
  },
  argTypes: {
    config: {
      description: 'Map of series keys to { label, color } or { label, theme: { light, dark } }.',
      table: { category: 'Data' },
    },
  },
}

export default meta
type Story = StoryObj<typeof ChartContainer>

/** Placeholder — add a Recharts chart as children to render. */
export const Default: Story = {
  args: {
    config: {
      revenue: { label: 'Revenue', color: 'var(--color-brand)' },
    },
  },
}
