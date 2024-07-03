/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': "var(--color-primary)",
        'color-primary-darker': "var(--color-primary-darker)",
        'color-primary-lighter': "var(--color-primary-lighter)",
        'color-primary-50': "var(--color-primary-50)",
        'color-primary-25': "var(--color-primary-25)",
        'color-primary-10': "var(--color-primary-10)",
        'color-primary-5': "var(--color-primary-5)",
        'color-neutral': "var(--color-neutral)",
        'color-neutral-80': "var(--color-neutral-80)",
        'color-neutral-60': "var(--color-neutral-60)",
        'color-neutral-20': "var(--color-neutral-20)",
        'color-neutral-15': "var(--color-neutral-15)",
        'color-neutral-10': "var(--color-neutral-10)",
        'color-neutral-5': "var(--color-neutral-5)",
        'colorprimary': "var(--colorprimary)",
      },
      fontFamily: {
        'roboto': ["Roboto", 'sans-serif'],
        'ga': ["Ga Maamli", 'sans-serif'],
        // gilroyLight: ["GilroyLight"],
        // gilroyRegular: ["GilroyRegular"],
      }
    },
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '922px',
      xl: '1200px',
      '2xl': '1400px',
    },
    container: {
      center: true
    },
  },
  plugins: [],
}
