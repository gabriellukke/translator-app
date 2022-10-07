/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'source-sans-pro, open-sans, sans-serif',
    },
    extend: {
      colors: {
        eletricblue: '#009cd8',
        ballblue: '#28a2d1',
        granite: '#656464',
      },
    },
  },
  plugins: [],
};
