/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'card': "url('/dist/cute.png')",
      }
    },
  },
  plugins: [],
}