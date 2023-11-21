/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"'],
      },
      colors: {
        cream: "#FFF0CE",
        ochreYellow: "#af7a1f",
      },
    },
  },
  plugins: [],
};
