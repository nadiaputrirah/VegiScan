/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan ini mencakup semua file di dalam folder src
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          400: '#639361',
          500: '#4a7f4a',
        },
        secondary: {
          500: '#FFAD00',
          600: '#E28300',
        },
        textDark: '#333333',
      },
      boxShadow: {
        smooth: '0 0 100px rgba(175, 173, 181, 0.1)',
      },
    },
  },
  plugins: [],
};
