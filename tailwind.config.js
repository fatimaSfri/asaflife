/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        asaf: ["asaf", "Asaf"],
      },
      backgroundImage:{
       "back_small_01":"url('../img/bg/S.jpg')",
       "back_medium_01":"url('../img/bg/M.jpg')",
       "back_large_01":"url('../img/bg/L.jpg')",
       "back_small_02":"url('../img/bg/S2.jpg')",
       "back_medium_02":"url('../img/bg/M2.jpg')",
       "back_large_02":"url('../img/bg/L2.jpg')",
       "back_small_03":"url('../img/bg/S3.jpg')",
       "back_medium_03":"url('../img/bg/M3.jpg')",
       "back_large_03":"url('../img/bg/L3.jpg')",


      }
  },
  plugins: [],
}
}
