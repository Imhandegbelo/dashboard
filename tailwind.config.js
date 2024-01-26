/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        search: 'url("../src/assets/topnav/search.svg")',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("progress-unfilled", ["&::-webkit-progress-bar", "&"]);
      addVariant("progress-filled", [
        "&::-webkit-progress-value",
        "&::-moz-progress-bar",
        "&",
      ]);
    }),
  ],
};
