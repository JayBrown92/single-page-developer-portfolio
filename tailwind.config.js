/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      "space-grotesk": ["Space Grotesk", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },

    colors: {
      "primary-bg": "#151515",
      "secondary-bg": "#242424",
      "color-primary": "#d9d9d9",
      "color-secondary": "#ffffff",
      "color-accent": "#4EE1A0",
      "color-disabled": "#FF6F5B",
      "transparent-bg": "transparent",
    },
    fontSize: {
      base: ["1rem", "1.625rem"],
      "base-2": ["1.125rem", "1.75rem"],

      lg: [
        "1.5rem",
        {
          lineHeight: "2rem",
          fontWeight: "700",
        },
      ],

      xl: [
        "2rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.09rem",
          fontWeight: "700",
        },
      ],
      "xl-2": [
        "3rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "-0.09rem",
          fontWeight: "700",
        },
      ],
      "2xl": [
        "2.5rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.15625rem",
          fontWeight: "700",
        },
      ],
      "2xl-2": [
        "4.5rem",
        {
          lineHeight: "4.5rem",
          letterSpacing: "-0.15625rem",
          fontWeight: "700",
        },
      ],
      "2xl-3": [
        "5.5rem",
        {
          lineHeight: "5.5rem",
          letterSpacing: "-0.15625rem",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      maxWidth: {
        "screen-lg": "1228px",
      },
    },
  },
  plugins: [],
};
