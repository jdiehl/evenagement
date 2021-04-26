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
          DEFAULT: '#70469B',
          light: '#8A5ABA',
          dark: '#5E3A83',
        },
        secondary: '#C75146',
        tertiary: '#EA8C55',
        error: {
          DEFAULT: '#E53424',
          light: '#FF6b4F',
          dark: '#AB0000',
        },
        warning: {
          DEFAULT: '#FF882D',
          light: '#FFB95D',
          dark: '#C65900',
        },
        background: {
          dark: '#EBE5F0',
          shaded: 'rgba(0, 0, 0, 0.15)'
        }
      },
      backgroundImage: theme => ({
        'hero-image': "url('/background.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
