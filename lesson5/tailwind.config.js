/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/components/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
        tertiary: "#0000ff",
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
      fontWeight: {
        "extra-light": 100,
        "extra-bold": 800,
      },
    },
  },
  plugins: [],
};
