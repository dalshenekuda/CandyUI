/**
 * Tailwind preset for @boaideas/ui-kit consumers.
 *
 * Import in your tailwind.config.js:
 *   import uiKitPreset from '@boaideas/ui-kit/tailwind.preset';
 *   export default { presets: [uiKitPreset], content: [...] };
 *
 * All values reference CSS custom properties from src/tokens/*.css.
 * Import src/styles/style.css once in your app entry — tokens won't work without it.
 */

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm:      '640px',
        md:      '768px',
        lg:      '1024px',
        xl:      '1280px',
        '2xl':   '1536px',
        desktop: '992px',   // matches --bp-desktop / typography breakpoint
      },

      spacing: {
        none: 'var(--spacing-none)',
        px:   'var(--spacing-px)',
        '2xs': 'var(--spacing-2xs)',
        xs:   'var(--spacing-xs)',
        sm:   'var(--spacing-sm)',
        md:   'var(--spacing-md)',
        lg:   'var(--spacing-lg)',
        xl:   'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
      },

      colors: {
        // Semantic tokens — use these in components
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-raised': 'var(--color-surface-raised)',

        text: {
          DEFAULT: 'var(--color-text)',
          muted:   'var(--color-text-muted)',
          subtle:  'var(--color-text-subtle)',
          'on-brand': 'var(--color-text-on-brand)',
        },

        brand: {
          DEFAULT: 'var(--color-brand)',
          dark:    'var(--color-brand-dark)',
          light:   'var(--color-brand-light)',
        },

        accent: {
          DEFAULT: 'var(--color-accent)',
          dark:    'var(--color-accent-dark)',
          light:   'var(--color-accent-light)',
          warm:    'var(--color-accent-warm)',
        },

        border: {
          DEFAULT: 'var(--color-border)',
          subtle:  'var(--color-border-subtle)',
        },

        danger:  'var(--color-danger)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',

        // Palette primitives — for Storybook / design token docs
        palette: {
          'teal-900': 'var(--palette-teal-900)',
          'teal-600': 'var(--palette-teal-600)',
          'teal-400': 'var(--palette-teal-400)',
          'teal-200': 'var(--palette-teal-200)',
          'cream-ink': 'var(--palette-cream-ink)',
          'cream-100': 'var(--palette-cream-100)',
          'cream-50':  'var(--palette-cream-50)',
          'grey-1000': 'var(--palette-grey-1000)',
          'grey-900':  'var(--palette-grey-900)',
          'grey-800':  'var(--palette-grey-800)',
          'grey-700':  'var(--palette-grey-700)',
          'grey-600':  'var(--palette-grey-600)',
          'grey-500':  'var(--palette-grey-500)',
          'grey-400':  'var(--palette-grey-400)',
          'grey-300':  'var(--palette-grey-300)',
          'grey-200':  'var(--palette-grey-200)',
          'grey-100':  'var(--palette-grey-100)',
          'coral-700': 'var(--palette-coral-700)',
          'coral-500': 'var(--palette-coral-500)',
          'coral-300': 'var(--palette-coral-300)',
          'amber-500': 'var(--palette-amber-500)',
          'olive-500': 'var(--palette-olive-500)',
          'sage-500':  'var(--palette-sage-500)',
        },

        // White alpha scale
        'white-alpha': {
          10:  'var(--palette-white-10)',
          20:  'var(--palette-white-20)',
          30:  'var(--palette-white-30)',
          40:  'var(--palette-white-40)',
          50:  'var(--palette-white-50)',
          60:  'var(--palette-white-60)',
          70:  'var(--palette-white-70)',
          80:  'var(--palette-white-80)',
          90:  'var(--palette-white-90)',
          100: 'var(--palette-white-100)',
        },
      },

      borderRadius: {
        none: 'var(--radius-none)',
        xs:   'var(--radius-xs)',
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },

      fontWeight: {
        light:    'var(--font-weight-light)',
        regular:  'var(--font-weight-regular)',
        medium:   'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold:     'var(--font-weight-bold)',
        black:    'var(--font-weight-black)',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },

      transitionDuration: {
        fast: 'var(--transition-fast)',
        base: 'var(--transition-base)',
        slow: 'var(--transition-slow)',
      },
    },
  },
};
