/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/!(tailwind).{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      translate: {
        'full-negative': '-100%',
      },
      colors: {
        black: {
          background: '#040404',
          'background-purpose': '#12141D',
          'perk-gradient-light': 'rgba(4, 6, 14, 0.9)',
          'perk-gradient-dark': '#04060E',
        },
      },
      inset: {
        '-0.5': '-0.125rem',
        '-3': '-0.75rem',
        '-2': '-0.5rem',
      },
      scale: {
        102: '1.02',
      },
      borderWidth: {
        0.5: '0.5px',
        1: '1px',
      },
      container: {
        center: true,
        padding: '1rem',
      },

      animation: {
        shimmering: 'shimmer 5s ease infinite',
        blob: 'blob 4s infinite',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': {
            'background-size': '300% 300%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '300% 300%',
            'background-position': 'right center',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
    },
  },
}
