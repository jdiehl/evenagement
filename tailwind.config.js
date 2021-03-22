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
          light: colors.gray[300],
          line: colors.gray[200],
          bg: colors.gray[100]
        },
        primary: {
          DEFAULT: '#3066BE', // colors.blue[600],
          light: '#4B7FD2', // colors.blue[500],
          dark: '#2958A3', // colors.blue[700],
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
