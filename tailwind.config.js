/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'arcade': "url('/images/background.png')",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        arcade: {
          bg: '#25257cff',
          surface: '#233360ff',
          neon: '#00f3ff',
          danger: '#ff003c',
          warning: '#ffea00',
        }
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px rgba(0,0,0,1)',
        'pixel-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
