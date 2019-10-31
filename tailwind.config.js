module.exports = {
  theme: {
    extend: {
      spacing: {
        "128": "32rem"
      },
      colors: {
        red: {
          100: "#F9EBE8",
          200: "#F0CDC5",
          300: "#E7AFA2",
          400: "#D4725C",
          500: "#C23616",
          600: "#AF3114",
          700: "#74200D",
          800: "#57180A",
          900: "#3A1007"
        },

        pink: {
          100: "#FDECEF",
          200: "#FBCFD7",
          300: "#F8B3BF",
          400: "#F3798E",
          500: "#EE405E",
          600: "#D63A55",
          700: "#8F2638",
          800: "#6B1D2A",
          900: "#47131C"
        },
        green: {
          100: "#ECFDEF",
          200: "#CFFBD7",
          300: "#B3F8BF",
          400: "#79F38E",
          500: "#40EE5E",
          600: "#3AD655",
          700: "#268F38",
          800: "#1D6B2A",
          900: "#13471C"
        },
        indigo: {
          100: "#EFECFD",
          200: "#D7CFFB",
          300: "#BFB3F8",
          400: "#8E79F3",
          500: "#5E40EE",
          600: "#553AD6",
          700: "#38268F",
          800: "#2A1D6B",
          900: "#1C1347"
        },
        blue: {
          100: "#ECEEFE",
          200: "#D0D4FD",
          300: "#B3B9FB",
          400: "#7B85F8",
          500: "#4251F5",
          600: "#3B49DD",
          700: "#283193",
          800: "#1E246E",
          900: "#14184A"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms"), require("tailwindcss-tables")()]
};
