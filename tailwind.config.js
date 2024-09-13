/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'accent': '#ca7869',
        'dark': '#2a3038',
        'my-blue': '#9799aa',
        'my-grey':'#eef0f2'
      
      },





    },
  },
  plugins: [],
}