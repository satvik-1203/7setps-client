const tailwindCss = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./misc/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'Poppins'", ...tailwindCss.fontFamily.sans],
      patrick: ["'Patrick Hand SC'"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
