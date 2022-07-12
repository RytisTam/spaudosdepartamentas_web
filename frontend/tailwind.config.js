/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: '#099AA0',
      'sdColor': '#099AA0',
    },
    fontFamily:{
      'headingfont': 'Poppins',
    },
    extend: {},
  },
  plugins: [],
}
