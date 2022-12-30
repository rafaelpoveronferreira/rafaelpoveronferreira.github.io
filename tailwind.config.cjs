/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200%',
      },
      colors: {
        'dark-gray': '#141414',
        'fading-white-80': 'rgba(255,255,255,0.8)',
        'fading-white-50': 'rgba(255,255,255,0.5)',
        'fading-white-30': 'rgba(255,255,255,0.3)',
        'fading-white-10': 'rgba(255,255,255,0.1)',
        'fading-white-5': 'rgba(255,255,255,0.05)',
        'fading-white-2': 'rgba(255,255,255,0.02)'
      },
      animation: {
        'background': 'pan 25s linear infinite',
        'pulsar': 'pulsar 1s ease-in infinite',
        'quicar': 'quicar 1s ease-in inifinite'
      },
      keyframes: {
        pulsar: {
          '0%, 100%': {opacity: '100%'},
          '50%': {opacity: '30%'},
        },
        pan: {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        quicar: {
          '0%, 100%': {
              transform: 'translate(-50%, -10%)',
              animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
              transform: 'translate(-50%, 0%)',
              animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          }
      }
      },
    }},
  plugins: [],
}
