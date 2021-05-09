const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: 'true',
    content: ['./js/**/*.js', './index.html'],
  },
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        'primary' : {
          DEFAULT: '#4D96A9',
          'light': '#8FE3F9',
          'active': '#71C0D4'
        },
        'secondary' : {
          DEFAULT: '#855FB1',
          'light': '#D9B8FF',
          'active': '#B18BDD'
        },
        'black': {
          'DEFAULT' : '#28283D',
          'light': '#87879D'
        }
      },
      fontFamily: {
        'sans': ['Red Hat Display', ...defaultTheme.fontFamily.serif],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
