/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.js", "./src/pages/**/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Radio: "Radio Canada",
      },
    },
  },
  plugins: [],
};
