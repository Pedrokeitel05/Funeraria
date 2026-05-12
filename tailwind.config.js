/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {

        /* Backgrounds */
        bg: {
          main: '#050816',
          soft: '#0A0D14',
          card: 'rgba(255,255,255,0.02)',
        },

        /* Gold */
        gold: {
          DEFAULT: '#C6A15B',
          soft: '#E0C48A',
          glow: 'rgba(198,161,91,0.4)',
        },

        /* Text */
        text: {
          primary: '#F5F5F5',
          secondary: '#B8B8B8',
          warm: '#E8E0D0',
        },
      },

      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },

  plugins: [],
};