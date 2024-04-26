/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderWidth: {
        '16': '16px',
      },
      screens: {
        '3xl': '1920px',
        'four-k': '2560px', 
      },
      colors: {
        gold: '#fee39d',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(15px)',
      },
    },
    fontFamily : {
      signature: ["Great Vibes"],
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}