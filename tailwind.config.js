/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#060604',
        },
        secondary: '#aaa6c3',
        tertiary: {
          light: '#f0f0f0',
          dark: '#151030',
        },
        "black-100": {
          light: '#f5f5f5',
          dark: '#100d25',
        },
        "black-200": {
          light: '#e5e5e5',
          dark: '#090325',
        },
        "white-100": '#f3f3f3',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};