/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'circle':'0 0 20px 1px rgba(0, 0, 0, 0.5)'
      },
      screens:{
        'max-767':{'max':'767px'},
        'max-512':{'max':'512px'},
        'max-346':{'max':'346px'},
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}