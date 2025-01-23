/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": "'Roboto', serif",
        "source-sans-3": "'Source Sans 3', serif",
      },
      colors: {
        "primary-color": "#54038e",
        "secondary-color": "#141414",
      },
      backgroundImage: {
        "hero-image": "url('/hero-image.webp')",
      },
      boxShadow: {
        'custom-inset': '0 0 17px 8px #6BD1FF inset',
      },

    },
  },
  plugins: [],
}
