/**
 * Tailwind preset for candy-ui consumers.
 * Import src/styles/style.css once in your app entry.
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
        desktop: '992px',
      },

      fontFamily: {
        display: 'var(--font-display)',
        body:    'var(--font-body)',
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
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
      },

      colors: {
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-raised': 'var(--color-surface-raised)',
        'surface-sunken': 'var(--color-surface-sunken)',

        text: {
          DEFAULT: 'var(--color-text)',
          muted:   'var(--color-text-muted)',
          subtle:  'var(--color-text-subtle)',
          'on-brand': 'var(--color-text-on-brand)',
        },

        brand: {
          DEFAULT: 'var(--color-brand)',
          hover:   'var(--color-brand-hover)',
          dark:    'var(--color-brand-dark)',
          light:   'var(--color-brand-light)',
        },

        accent: {
          DEFAULT: 'var(--color-accent)',
          dark:    'var(--color-accent-dark)',
          light:   'var(--color-accent-light)',
          warm:    'var(--color-accent-warm)',
          alt:     'var(--color-accent-alt)',
        },

        border: {
          DEFAULT: 'var(--color-border)',
          subtle:  'var(--color-border-subtle)',
          strong:  'var(--color-border-strong)',
        },

        tone: {
          bg:     'var(--tone-bg)',
          ink:    'var(--tone-ink)',
          border: 'var(--tone-border)',
          accent: 'var(--tone-accent)',
        },

        danger:  'var(--color-danger)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',

        palette: {
          'ink-1000': 'var(--palette-ink-1000)',
          'ink-900':  'var(--palette-ink-900)',
          'ink-800':  'var(--palette-ink-800)',
          'ink-600':  'var(--palette-ink-600)',
          'ink-500':  'var(--palette-ink-500)',
          'ink-300':  'var(--palette-ink-300)',
          'ink-200':  'var(--palette-ink-200)',
          'ink-100':  'var(--palette-ink-100)',
          paper:      'var(--palette-paper)',
          'blueras-700': 'var(--palette-blueras-700)',
          'blueras-500': 'var(--palette-blueras-500)',
          'blueras-200': 'var(--palette-blueras-200)',
          'raspberry-700': 'var(--palette-raspberry-700)',
          'raspberry-600': 'var(--palette-raspberry-600)',
          'raspberry-200': 'var(--palette-raspberry-200)',
          'spearmint-700': 'var(--palette-spearmint-700)',
          'spearmint-500': 'var(--palette-spearmint-500)',
          'spearmint-200': 'var(--palette-spearmint-200)',
          'lemon-700': 'var(--palette-lemon-700)',
          'lemon-600': 'var(--palette-lemon-600)',
          'lemon-200': 'var(--palette-lemon-200)',
          'lime-700': 'var(--palette-lime-700)',
          'lime-500': 'var(--palette-lime-500)',
          'lime-200': 'var(--palette-lime-200)',
        },

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

      borderWidth: {
        print: 'var(--border-print)',
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
        sm:    'var(--shadow-sm)',
        md:    'var(--shadow-md)',
        lg:    'var(--shadow-lg)',
        xl:    'var(--shadow-xl)',
        press: 'var(--shadow-press)',
        hover: 'var(--shadow-hover)',
        lift:  'var(--shadow-lift)',
      },

      transitionDuration: {
        fast: 'var(--transition-fast)',
        base: 'var(--transition-base)',
        slow: 'var(--transition-slow)',
      },

      transitionTimingFunction: {
        'out-quart': 'var(--ease-out-quart)',
        spring:      'var(--ease-spring)',
      },
    },
  },
};
