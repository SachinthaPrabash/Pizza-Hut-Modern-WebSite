/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Header.js",
    "./src/components/Footer.js",
    "./src/App.js",
    "./src/screen/HomeScreen.js",

  ],
  theme: {
    extend: {
      rotate: {
        '20': '20deg',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
