/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '800px',
      'md': '1237px',
      'lg': '1352px',
    },

    fontFamily: {
      SCP: ["Source Code Pro", "monospace"],
    },

    extend: {
      colors : {
        primary : '#FFD700',
        secondary : "#FFB400"
      },
    },
  },
  plugins: [],
}

