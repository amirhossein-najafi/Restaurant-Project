/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green:"#10D352",
        brightColor: "#F26415",
        blackColor:"#010B14",
        whiteColor:"#f8e6e6",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
        footerColor:"#8A4924"
      },
    },
  },
  plugins: [],
};
