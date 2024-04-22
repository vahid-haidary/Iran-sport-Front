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
          50 : "#DBE6F2",
          100 : "#f4f5f6",
          150 : "#ABB7C4",
          200 : "#94A0AE",
          300 : "#7E8A97",
          400 : "#697480",
        },
      },
      backgroundColor: {
        primary : "#f4f5f6",
        brand : "#FFBD5C",
        boxes : "#EEEEEE"
      },
      
    screens: {
      'xs' : '480px', 
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
    },

    boxShadow: {
      "1": "0px 1px 12px 1px rgb(229, 229, 229);",
      "2" : "0px 4px 5px 0px #0000001A;",
      "3" : "0px 4px 4px 0px #0000001A;",
      "4": "0px 2px 8px 0px #414A5314;"


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

