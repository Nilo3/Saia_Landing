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
    },
    fontFamily : {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}

