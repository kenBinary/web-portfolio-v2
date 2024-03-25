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
    },
  },
  plugins: [],
}

