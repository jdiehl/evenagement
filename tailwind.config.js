const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
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
        error: {
          DEFAULT: '#FF2D2D',
          light: '#FF5454',
          dark: '#E20505',
        },
        warning: {
          DEFAULT: '#FF882D',
          light: '#FF9E54',
          dark: '#FF6F00',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
