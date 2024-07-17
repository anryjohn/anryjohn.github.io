/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Default font
        dosis: ['Dosis', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
}