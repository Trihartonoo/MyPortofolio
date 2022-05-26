module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Sora: ['Sora', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        colorGradient: 'linear-gradient(to right, rgb(59,130,246) , rgb(29,78,216));',
        colorBackground: '#F9F5F0',
        colorFooter: '#303030',
      },
      height: {
        50: '50vh',
        140: '148vh',
        150: '150vh',
        110: '110vh',
      },
      width: {
        94: '94%',
        98: '98%',
      },
      lineHeight: {
        75: '75px',
      },
      boxShadow: {
        '3xl': '0px 40px 60px rgba(13, 14, 37, 0.1)',
      },
    },
  },
  plugins: [],
};
