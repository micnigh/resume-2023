const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '540px', // reduce 'sm' breakpoint from 640px so print will display as desktop
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-special)', ...fontFamily.sans],
        mono: ['var(--font-capture-it)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
