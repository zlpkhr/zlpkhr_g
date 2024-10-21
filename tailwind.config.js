const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: 1.4,
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: 1.4,
        },
      ],
      m: [
        "1rem",
        {
          lineHeight: 1.4,
        },
      ],
      title: [
        "2.5rem",
        {
          lineHeight: 1.15,
        },
      ],
    },
    extend: {
      spacing: {
        0.75: "0.1875rem",
        18: "4.5rem",
        145: "36.25rem",
      },
      colors: {
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        pink: "#DD84A1",
        green: "#AEBE89",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist)", ...defaultTheme.fontFamily.sans],
      title: ["var(--font-itc-garamond-std)", ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
};
