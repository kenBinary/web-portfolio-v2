/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '1.5xl': ['1.35rem', { lineHeight: '1.80rem' }],
      },
      colors: {
        "background": "#2E3440",
        "background-alternate": "#d8eefe",
        "secondary": "#90b4ce",
        "tertiary": "#094067",
        "button": "#3da9fc",
        "paragraph": "#FFFFFF",
        "accent": "#ECEFF4",
        "snow-storm-1": "#D8DEE9",
        "snow-storm-2": "#E5E9F0",
        "snow-storm-3": "#ECEFF4",
        "polar-night-1": "#2E3440",
        "polar-night-2": "#3B4252",
        "polar-night-3": "#434C5E",
        "polar-night-4": "#4C566A",
        "frost-1": "#8FBCBB",
        "frost-2": "#88C0D0",
        "frost-3": "#81A1C1",
        "frost-4": "#5E81AC",
        "aurora-1": "#BF616A",
        "aurora-2": "#D08770",
        "aurora-3": "#EBCB8B",
        "aurora-4": "#A3BE8C",
        "aurora-5": "#B48EAD",
      }
    },
  },
  plugins: [],
}

