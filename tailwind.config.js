module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-magenta": "hsl(293, 100%, 63%)",
        "light-violet": "hsl(264, 100%, 61%)",
        'yello': "#baa333"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
