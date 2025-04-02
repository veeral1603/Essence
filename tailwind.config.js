/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#454545",
        secondaryText: "#8A8A8A",
        primaryBorder: "#DEDFD1",
        seconaryBtnBg: "#FAFAFA",
      },
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
        poppins: ["Poppins", "sans-serif"],
        shareTechMono: ["Share Tech Mono", "monospace"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "6s slide infinite linear",
      },
    },
  },
  plugins: [],
};
