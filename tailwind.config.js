const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        gray: {
          DEFAULT: colors.gray[600],
          line: colors.gray[200],
          bg: colors.gray[100]
        },
        primary: {
          DEFAULT: colors.blue[600],
          light: colors.blue[500],
          dark: colors.blue[700],
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
