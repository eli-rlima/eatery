/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "light-medium": "#E6E6E6",
        "red-logo": "#DD4F50"
      },
      spacing: {
        86: "22rem",
        13: "50px",
        120: "550px"
      }
    }
  },
  plugins: []
};
