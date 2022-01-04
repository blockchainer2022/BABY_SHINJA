module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          300: "#222222",
          400: "#262525",
          500: "#1C1A12",
          600: "#262626",
        },
        primary: {
          400: "rgba(238, 185, 73, 0.5)",
          500: "#EEB949",
        },
        gray: {
          DEFAULT: "#494949",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      fontfamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
