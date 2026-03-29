/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        card: '#151520',
        primary: '#00d2ff', // Cyan neon
        secondary: '#a033ff', // Purple neon
        muted: '#5c5c7a',
        textMain: '#e0e0e0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00d2ff, 0 0 10px #00d2ff' },
          '100%': { boxShadow: '0 0 10px #a033ff, 0 0 20px #a033ff' },
        }
      }
    },
  },
  plugins: [],
}
