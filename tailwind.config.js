/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#eef2f6',
          primary: '#3b82f6',
          dark: '#1e3a8a',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}