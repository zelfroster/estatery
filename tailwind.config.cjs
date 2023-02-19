module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        hauoraSans: ["Hauora Sans", "sans-serif"],
      },
      colors: {
        mainBgColor: "#f8f7fd",
        purple: "#7065ee",
        darkPurple: "#13152f",
        gray: "#8d8a9a",
        lightGray: "#dddaea",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '3rem',
          lg: '4rem',
          "2xl": '6rem',
        }
      }
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
