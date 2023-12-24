/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderWidth: {
        '16': '16px',
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
    }
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'], // or other variants like ['hover', 'focus']
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}