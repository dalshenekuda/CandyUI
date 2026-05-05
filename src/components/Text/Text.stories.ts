import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Polymorphic text primitive that enforces design-system typography. Applies responsive `typo-*` CSS classes from the global SCSS stylesheet. Override the default HTML tag with `as`, font weight with `weight`, and color with `color`.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Typographic variant — maps to a responsive `typo-*` CSS class.',
      control: { type: 'select' },
      options: [
        'heading-xl', 'heading-lg', 'heading-md', 'heading-sm',
        'subtitle-lg', 'subtitle-md',
        'body-lg', 'body-md', 'body-sm',
        'caption-md', 'caption-sm',
        'overline',
      ],
      table: { category: 'Appearance' },
    },
    weight: {
      description: 'Overrides the default font weight via `--font-weight-*` CSS variable.',
      control: { type: 'select' },
      options: [undefined, 'light', 'regular', 'medium', 'semibold', 'bold', 'black'],
      table: { category: 'Appearance' },
    },
    color: {
      description: 'Text color from semantic design tokens via `--color-*` CSS variable.',
      control: { type: 'select' },
      options: [
        undefined,
        'color-text',
        'color-text-muted',
        'color-text-subtle',
        'color-text-on-brand',
        'color-brand',
        'color-accent',
        'color-danger',
        'color-success',
        'color-warning',
      ],
      table: { category: 'Appearance' },
    },
    as: {
      description: 'Override the rendered HTML tag (e.g. `"span"`, `"div"`, `"label"`).',
      control: { type: 'text' },
      table: { category: 'Appearance' },
    },
  },
  args: {
    variant: 'body-md',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

export default meta
type Story = StoryObj<typeof Text>

/** Interactive playground — adjust all controls in the panel. */
export const Default: Story = {}

/** Large display heading. */
export const HeadingXL: Story = {
  args: { variant: 'heading-xl', children: 'Heading XL' },
}

/** Section heading. */
export const HeadingLG: Story = {
  args: { variant: 'heading-lg', children: 'Heading LG' },
}

/** Card or modal title. */
export const HeadingMD: Story = {
  args: { variant: 'heading-md', children: 'Heading MD' },
}

/** Small heading or label header. */
export const HeadingSM: Story = {
  args: { variant: 'heading-sm', children: 'Heading SM' },
}

/** Large subtitle or lead paragraph. */
export const SubtitleLG: Story = {
  args: { variant: 'subtitle-lg', children: 'Subtitle LG — lorem ipsum dolor sit amet.' },
}

/** Standard body paragraph. */
export const BodyMD: Story = {
  args: { variant: 'body-md', children: 'Body MD — lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
}

/** Small body text for dense UIs. */
export const BodySM: Story = {
  args: { variant: 'body-sm', children: 'Body SM — supplementary detail text.' },
}

/** Caption for images or fine print. */
export const CaptionMD: Story = {
  args: { variant: 'caption-md', children: 'Caption MD — small hint text.' },
}

/** Uppercase category label. */
export const Overline: Story = {
  args: { variant: 'overline', children: 'OVERLINE — CATEGORY LABEL' },
}

/** Semibold weight override applied to body-md. */
export const WeightSemibold: Story = {
  args: { variant: 'body-md', weight: 'semibold', children: 'Semibold body text.' },
}

/** Muted text color for secondary content. */
export const ColorMuted: Story = {
  args: { variant: 'body-md', color: 'color-text-muted', children: 'Muted text — secondary information.' },
}

/** Brand color for highlighted or linked text. */
export const ColorBrand: Story = {
  args: { variant: 'body-md', color: 'color-brand', children: 'Brand-colored text.' },
}
