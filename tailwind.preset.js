/**
 * Tailwind preset for @boaideas/ui-kit consumers.
 *
 * Import in your tailwind.config.js:
 *   import uiKitPreset from '@boaideas/ui-kit/tailwind.preset';
 *   export default { presets: [uiKitPreset], content: [...] };
 *
 * All values reference CSS custom properties from @boaideas/ui-kit/style.css.
 * Import that stylesheet once in your app entry — tokens won't work without it.
 */

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      screens: {
        desktop: '992px',
      },
      spacing: {
        none: 'var(--spacing-none)',
        '4xs': 'var(--spacing-4xs)',
        xxxs: 'var(--spacing-xxxs)',
        xxs:  'var(--spacing-xxs)',
        xs:   'var(--spacing-xs)',
        s:    'var(--spacing-s)',
        m:    'var(--spacing-m)',
        l:    'var(--spacing-l)',
        xl:   'var(--spacing-xl)',
        xxl:  'var(--spacing-xxl)',
        xxxl: 'var(--spacing-xxxl)',
      },
      colors: {
        primary: {
          1: 'var(--primary-color-1)',
          2: 'var(--primary-color-2)',
          3: 'var(--primary-color-3)',
          4: 'var(--primary-color-4)',
          5: 'var(--primary-color-5)',
          6: 'var(--primary-color-6)',
        },
        grey: {
          100:  'var(--grey-100)',
          200:  'var(--grey-200)',
          300:  'var(--grey-300)',
          400:  'var(--grey-400)',
          500:  'var(--grey-500)',
          600:  'var(--grey-600)',
          700:  'var(--grey-700)',
          800:  'var(--grey-800)',
          900:  'var(--grey-900)',
          1000: 'var(--grey-1000)',
        },
        secondary: {
          '1-dark':  'var(--secondary-color-1-dark)',
          '1-base':  'var(--secondary-color-1-base)',
          '1-light': 'var(--secondary-color-1-light)',
          '2-dark':  'var(--secondary-color-2-dark)',
          '2-base':  'var(--secondary-color-2-base)',
          '2-light': 'var(--secondary-color-2-light)',
          '3-dark':  'var(--secondary-color-3-dark)',
          '3-base':  'var(--secondary-color-3-base)',
          '3-light': 'var(--secondary-color-3-light)',
          '4-dark':  'var(--secondary-color-4-dark)',
          '4-base':  'var(--secondary-color-4-base)',
          '4-light': 'var(--secondary-color-4-light)',
          '5-dark':  'var(--secondary-color-5-dark)',
          '5-base':  'var(--secondary-color-5-base)',
          '5-light': 'var(--secondary-color-5-light)',
          '6-dark':  'var(--secondary-color-6-dark)',
          '6-base':  'var(--secondary-color-6-base)',
          '6-light': 'var(--secondary-color-6-light)',
        },
        primery: {
          'ice':       'var(--Primery-Colors-Ice)',
          'deep-gray': 'var(--Primery-Colors-Gray-Deep-Gray)',
          'teal':      'var(--Primery-Colors-Teal)',
        },
        'white-alpha': {
          10:  'var(--white-alpha-10)',
          20:  'var(--white-alpha-20)',
          30:  'var(--white-alpha-30)',
          40:  'var(--white-alpha-40)',
          50:  'var(--white-alpha-50)',
          60:  'var(--white-alpha-60)',
          70:  'var(--white-alpha-70)',
          80:  'var(--white-alpha-80)',
          90:  'var(--white-alpha-90)',
          100: 'var(--white-alpha-100)',
        },
      },
      borderRadius: {
        none: 'var(--radius-none)',
        xs:   'var(--radius-xs)',
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      fontWeight: {
        light:    'var(--font-weight-light)',
        regular:  'var(--font-weight-regular)',
        medium:   'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold:     'var(--font-weight-bold)',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 35, 73, 0.05)',
        md: '0 4px 6px -1px rgba(0, 35, 73, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 35, 73, 0.1)',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        base: 'var(--transition-base)',
        slow: 'var(--transition-slow)',
      },
    },
  },
};
