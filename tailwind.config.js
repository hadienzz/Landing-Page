/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        mobile: "5.342px",
        subHeader: "12.019px",
      },
      fontFamily: {
        inter: "Inter",
      },
      backgroundColor: {
        green: "#4CAF4F",
      },
      colors: {
        green: "#4CAF4F",
      },
      boxShadow: {
        community:
          "box-shadow: 0px 0.668px 1.335px 0px rgba(171, 190, 209, 0.20);",
      },
    },
  },
  plugins: [],
};
