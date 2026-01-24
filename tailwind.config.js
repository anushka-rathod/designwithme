
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/About.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      fontFamily: {
        italianno: ['Italianno', 'cursive'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'purple-dark': '#5B3765',
        'purple-light': '#D6A8C4',
        'pink-light': '#F3CCDE',
        'pink-dark': '#9E6899',
        'text-dark': '#1E5571',
      }
    },
  }, 
  plugins: [],
}

