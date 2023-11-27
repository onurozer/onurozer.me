const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,md,liquid,erb,serb}",
    "./frontend/javascript/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
};
