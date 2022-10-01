/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#C4BAFF',
        pink: '#FEBDFC',
        mainPurple: '#9886fa',
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
