/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'movie-class-bg-color' : "#333333",
        'movie-dur-bg-color' : "#0f0f0f",
        'movie-genre-bg-color' : "#2f21fa",
        'disabled-blue': 'rgba(66, 153, 225, 0.3)'
      }
    },
  },
  plugins: [],
}

