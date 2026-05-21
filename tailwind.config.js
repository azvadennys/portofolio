/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'tilt': 'tilt 10s infinite linear',
        'blink': 'blink 1s step-end infinite',
        'aurora': 'aurora 18s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'grid-pan': 'gridPan 30s linear infinite',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '33%':       { transform: 'translate(40px, -30px) scale(1.1)', opacity: '0.7' },
          '66%':       { transform: 'translate(-30px, 40px) scale(0.95)', opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(0.85)', opacity: '0.8' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        gridPan: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
      },
    },
  },
  plugins: [],
}
