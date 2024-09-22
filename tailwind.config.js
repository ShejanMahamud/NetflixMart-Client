/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": "Space Grotesk"
      },
      backgroundImage: {
        'login': "linear-gradient(180deg, rgba(4, 26, 60, 0.45) 0%, rgba(4, 26, 60, 0.90) 100%), url('https://i.ibb.co.com/YP51Hsk/oscar-vargas-KJz3g6-FJ98-I-unsplash.jpg')",
      },
    },
  },
  plugins: [],
}