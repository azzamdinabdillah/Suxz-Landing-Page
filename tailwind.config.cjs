/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-blue": "#8C82FC",
        "light-blue": "#F8F8FF",
        "text-grayy": "#BAB8D2",
        "shadow-color": "#B0D0DD",
        "text-dark": "#22293E"
      }
    },
  },
  plugins: [],
}
