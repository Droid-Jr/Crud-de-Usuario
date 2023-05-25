/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sms:'420px',
      sm:'480px',
      md:'760px',
      lg:'960px',
      xl:'1280px',
    },
    extend: {},
  },
  plugins: [],
}

