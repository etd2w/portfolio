module.exports = {
  purge: [],
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
        5: "5px",
      },
      colors: {
        primary: "#553344",
        secondary: {
          100: "#FFF5EB",
          200: "#FFDDBB",
        },
        ternary: "#CC2255",
      },
      // Font-size for 4rem
      // Colors
      // Border width
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
