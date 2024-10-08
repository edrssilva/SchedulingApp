/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6200ed",
        },
        secondary: {
          DEFAULT: "#546f7a",
        },
        body: {
          light: "#f5f5f5",
        },
        input: {
          light: "#dadee1",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
