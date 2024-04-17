/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{.html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}

