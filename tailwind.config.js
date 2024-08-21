/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors:{
        "bike-primary":"rgba(231, 111, 81, 0.1)",
        "btn-primary":"rgb(231, 111, 81)"
      }
    },
  },
  plugins: [require('daisyui'),],
}
