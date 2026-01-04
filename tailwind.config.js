/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004B8D', 
          light: '#0066B3',
          dark: '#003366'
        },
        secondary: {
          DEFAULT: '#8CC63F', 
          light: '#A2D45E',
          dark: '#76A832'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 75, 141, 0.08)',
      }
    },
  },
  plugins: [],
}