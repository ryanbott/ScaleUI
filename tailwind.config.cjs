/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {



      fontFamily: {
        mono: [' var(--font-mono) '],
      },

      fontSize: {
        'scale-1': 'var(--scale-1)',
        'scale-2': 'var(--scale-2)',
        'scale-3': 'var(--scale-3)',
        'scale-4': 'var(--scale-4)',
        'scale-5': 'var(--scale-5)',
        'scale-6': 'var(--scale-6)',
        'scale-7': 'var(--scale-7)',
        'scale-8': 'var(--scale-8)',
        'scale-9': 'var(--scale-9)',
        'fluid-3-6': 'clamp(0.8rem, 1.526vw + 0.419rem, 1.563rem)'
      },

      spacing: {
        'scale-1': 'var(--scale-1)',
        'scale-2': 'var(--scale-2)',
        'scale-3': 'var(--scale-3)',
        'scale-4': 'var(--scale-4)',
        'scale-5': 'var(--scale-5)',
        'scale-6': 'var(--scale-6)',
        'scale-7': 'var(--scale-7)',
        'scale-8': 'var(--scale-8)',
        'scale-9': 'var(--scale-9)',
        'fluid-3-6': 'clamp(0.8rem, 1.526vw + 0.419rem, 1.563rem)'
      },

      textColor: {
        1: 'var(--text-1)',
        2: 'var(--text-2)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
      },

      backgroundColor: {
        1: 'var(--bg-1)',
        2: 'var(--bg-2)',
        3: 'var(--bg-3)',
      },




    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
