/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(90deg)' },
        },
        shake: {
          '10%': { transform: 'translateX(-5%)' },
          '30%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-7.5%)' },
          '70%': { transform: 'translateX(7.5%)' },
          '90%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        flip: 'flip 1s ease-in-out',
        shake: 'shake 250ms ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}