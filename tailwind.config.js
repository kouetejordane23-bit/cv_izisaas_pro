/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A14',
        accent: '#F97316', // Orange
        gold: '#FBBF24', // Or
        text: '#F0EFF4',
        dark: '#18181B',
      },
      fontFamily: {
        sans: ['"Sora"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
