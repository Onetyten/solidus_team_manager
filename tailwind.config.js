/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'accent': '#cf89c9',
        'dark': '#27374D',
        'my-blue': '#526D82',
        'my-grey':'#DDE6ED'
      
      },





    },
  },
  plugins: [],
}