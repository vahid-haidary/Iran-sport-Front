/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemiBold" : "Dana DemiBold",
        "MorabbaLight" : "Morabba Light",
        "MorabbaMedium" : "Morabba Medium",
        "MorabbaBold" : "Morabba Bold"
      },
      colors: {
        primary : "#f4f5f6",
        brand : "#FFBD5C",
        blackText : {
          100: "#414A53",
          200 : "#2E353C",
          300 : "#000000",
        },

        grayText:{
          100 : "#f4f5f6",
          200 : "#94A0AE",
          300 : "#7E8A97",
          400 : "#697480",
        },
      },
      backgroundColor: {
        primary : "#f4f5f6",
        brand : "#FFBD5C",
      }
    },
  },
  plugins: [],
}

