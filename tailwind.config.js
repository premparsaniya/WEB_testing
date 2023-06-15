/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#870051",
      },
      backgroundPosition: {
        center_left: "center left",
      },
    },
  },
  plugins: [],
};
