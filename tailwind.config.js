/** @type {import('tailwindcss').Config} */
const defaultTheme =import('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'background': '#702272',
        'primary_1': '#712e84',
        'primary_2': '#3e295b',
        'primary_3': '#5c266d',
      },
      screens: {
        '2xl': '1400px',
        'xl':'1260px',
        'lg':'1160px',
        'md':'760px',
        'xs': '480px',
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        raleway:['Raleway', 'sans-serif'],
        inter: ['Inter  ht', 'sans-serif']
      },
      shadow:{
        '3xl':'0 35px 60px -15px rgba(0, 0, 0, 0.3)', 
           },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};