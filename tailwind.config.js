/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        "grid-col": "#0d1117",
        "month-col": "#17324e",
        "home-col": "#1e1e1e",
        "rules-col": "#dbeafe",
      },
    },
  },
};
