/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f3b2c",
        secondary: "#FFFFFF",
        dark: "#1a1a1a",
        light: "#61d5ae",
      },
      fontFamily: {
        sans: [
          "Roboto Serif",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        xs: "480px",
        small: "870px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
};
