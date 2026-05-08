/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C89B53',
        'gold-glow': '#E0B56D',
        'bg-main': '#05070B',
        'bg-card': '#0B1016',
        'text-warm': '#F5F1EA',
        'text-secondary': '#B7B7B7',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'float': 'floatAnim 5s ease-in-out infinite',
        'pulse-gold': 'pulseGold 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatAnim: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
