/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        bg:       '#0f0f0f',
        'bg-alt': '#1a1a1a',
        primary:  '#ffffff',
        muted:    '#a6a6a6',
        border:   '#1a1a1a',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Inter Display', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-custom': '-0.08em',
        'tight-custom': '-0.04em',
      },
    },
  },
  plugins: [],
}
