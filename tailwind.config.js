/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#cc8b65',
        pink: '#e3dcd2',
        mainPurple: '#013328',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      poppings: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
