/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#115e59',
        primaryDark : '#042523',
        secondary : '#978500',
      },
      boxShadow: {
        cardAuth: '0px 14px 64px 0px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [],
}

