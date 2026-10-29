/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#174B35',
          deep: '#103728',
          leaf: '#4F7D43',
          cream: '#F8F5EC',
          rice: '#FFFDF7',
          earth: '#8A603B',
          gold: '#C7A45A',
          dark: '#252C26',
        },
      },
      fontFamily: {
        tamil: ['"Noto Sans Tamil"', 'sans-serif'],
        sans: ['Inter', '"Noto Sans Tamil"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 30px -5px rgba(23, 75, 53, 0.12), 0 4px 6px -2px rgba(23, 75, 53, 0.05)',
      },
    },
  },
  plugins: [],
}
