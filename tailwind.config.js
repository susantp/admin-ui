/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#faf5ff",
          100: "#f4e9fe",
          200: "#ead6fe",
          300: "#dab6fc",
          400: "#c387f9",
          500: "#ac59f3",
          600: "#9a3de6",
          700: "#8226ca",
          800: "#6e24a5",
          900: "#5b1f84",
          950: "#3d0962",
        },
        secondary: "#FFC107",
        danger: "#DC3545",
        success: "#28A745",
        warning: "#FFA500",
        dark: {
          primary: "#6CB2EB",
          secondary: "#F8E71C",
          danger: "#F26060",
          success: "#44CF6C",
          warning: "#FFC107",
        },
      },
    },
  },
  plugins: [],
}
