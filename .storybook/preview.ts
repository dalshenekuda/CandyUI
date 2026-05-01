import type { Preview } from '@storybook/vue3-vite';
import '../src/styles/index.css';
import '../src/brand-variables.scss';
import '../src/spacing-variables.scss';
import '../src/typography-variables.scss';
import '../src/typography-classes.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
