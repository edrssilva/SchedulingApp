/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: {
          light: "#f5f5f5",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
