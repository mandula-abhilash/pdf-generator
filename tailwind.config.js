/** @type {import('tailwindcss').Config} */
export default {
  content: ["./templates/**/*.handlebars"],
  theme: {
    extend: {
      colors: {
        "web-orange": {
          50: "#fefaf2",
          100: "#fef5e6",
          200: "#fbe6bf",
          300: "#f9d799",
          400: "#f5ba4d",
          500: "#F09C00",
          600: "#d88c00",
          700: "#b47500",
          800: "#905e00",
          900: "#764c00",
        },
        "havelock-blue": {
          50: "#f5fafe",
          100: "#ecf5fd",
          200: "#cfe6fa",
          300: "#b1d7f6",
          400: "#77b9f0",
          500: "#3D9BE9",
          600: "#378cd2",
          700: "#2e74af",
          800: "#255d8c",
          900: "#1e4c72",
        },
        conifer: {
          50: "#fbfdf5",
          100: "#f7faec",
          200: "#eaf3cf",
          300: "#ddecb2",
          400: "#c4de78",
          500: "#ABD03E",
          600: "#9abb38",
          700: "#809c2f",
          800: "#677d25",
          900: "#54661e",
        },
        magenta: {
          50: "#d966c2",
          100: "#cf5cb8",
          200: "#c552ae",
          300: "#bb48a4",
          400: "#b13e9a",
          500: "#a73490",
          600: "#9d2a86",
          700: "#93207c",
          800: "#891672",
          900: "#7f0c68",
        },
        "boy-red": {
          50: "#40ced7",
          100: "#36c4cd",
          200: "#2cbac3",
          300: "#22b0b9",
          400: "#18a6af",
          500: "#0e9ca5",
          600: "#04929b",
          700: "#008891",
          800: "#007e87",
          900: "#00747d",
        },
      },
      width: {
        a4: "210mm",
      },
      height: {
        a4: "297mm",
      },
    },
  },
  plugins: [],
};
