/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        menu:'menu',
        title:'text',
        others:'text2',
      },
      zIndex:{
        '100':'100',
      },
      boxShadow:{
        boxshadow:'0 0 25px 5px rgb(235, 230, 230)',
        inset:'0 0 5px 10px rgb(255, 255, 255)',
        box1:'0 0 30px 5px rgb(18, 84, 129)',
      },
    },
  },
  plugins: [],
}

