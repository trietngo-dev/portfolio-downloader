/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dopamine: {
          blue: '#3A86FF',
          coral: '#FF6B4A',
          yellow: '#FFD166',
          mint: '#06D6A0',
          lilac: '#8338EC',
          purple: '#9D4EDD',
          pink: '#FF006E',
          sky: '#E0F2FE',
          dark: '#181A2A',
          card: '#FFFFFF',
          bg: '#FAFAFD',
        },
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pop-sm': '3px 3px 0px 0px #181A2A',
        'pop': '5px 5px 0px 0px #181A2A',
        'pop-lg': '8px 8px 0px 0px #181A2A',
        'pop-xl': '12px 12px 0px 0px #181A2A',
        'pop-blue': '5px 5px 0px 0px #3A86FF',
        'pop-coral': '5px 5px 0px 0px #FF6B4A',
        'pop-yellow': '5px 5px 0px 0px #FFD166',
        'pop-mint': '5px 5px 0px 0px #06D6A0',
        'pop-lilac': '5px 5px 0px 0px #8338EC',
      },
      animation: {
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(-4%)' },
          '50%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
