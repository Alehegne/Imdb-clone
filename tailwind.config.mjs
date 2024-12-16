/** @type {import('tailwindcss').Config} */
const configuration = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        increase: {
          "0%": { width: "0" },
          "100%": { width: "50%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },

          "100%": { opacity: 1 },
        },
        spinnerFade: {
          "0%": { backgroundColor: "#69717d" },

          "100%": { backgroundColor: "transparent" },
        },
      },
      animation: {
        enlarge: "increase 0.5s ease-in-out",
        fadeIn: "fadeIn 0.1s ease-in-out infinite",

        spinnerFade: "spinnerFade 1s infinite linear",
      },
    },
  },
  variants: {
    extend: {
      animation: ["before"], // Enable animation utilities for pseudo-elements
    },
  },
  plugins: [],
};

export default configuration;
