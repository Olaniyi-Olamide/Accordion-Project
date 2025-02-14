/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
  },
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        Lightpink:' hsl(275, 100%, 97%)',
        Grayishpurple: 'hsl(292, 16%, 49%)',
        Darkpurple: 'hsl(292, 42%, 14%)',
      }
    },
  },
  plugins: [],
}

