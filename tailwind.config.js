/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        '90px': '90px',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar-hide')],
};
