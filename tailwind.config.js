/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#1a181e",
        secondary: "#4d4d4d",
      },
      colors: {
        primary: "#FAFAFA",
        secondary: "#F2F2F2",
        "navbar-primary": "#1e2640",
        "navbar-secondary": "#353C53",
      },
      borderColor: {
        primary: "#D9D9D9",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [],
};
