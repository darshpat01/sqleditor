/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkColor: {
          400: "#1B0044",
          300: "#5727A3",
          200: "#C3ACD0",
          100: "#7743DB",
        },
        lightColor: {
          400: "#FFFBF5",
          300: "#F7EFE5",
          200: "#C3ACD0",
          100: "#7743DB",
          50: "#4f2d90",
        },
      },
    },
  },
  plugins: [],
};
