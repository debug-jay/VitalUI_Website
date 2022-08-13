/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'mobile': '350px'
      }
    },
  },
  plugins: [],
}