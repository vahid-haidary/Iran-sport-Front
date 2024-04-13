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
      },
      
    screens: {
      'xs' : '480px', 
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
    },

    boxShadow: {
      "1": "0px 1px 12px 1px rgb(229, 229, 229);"
    },
    spacing: {
      "21" : "21px"
    }

    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');}
  ],
}

