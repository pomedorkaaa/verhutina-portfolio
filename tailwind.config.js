/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f0f0f',
        'bg-alt': '#1a1a1a',
        primary: '#ffffff',
        muted: '#999999',
        border: '#2a2a2a'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tight-custom': '-0.02em',
        'tighter-custom': '-0.04em',
      }
    },
  },
  plugins: [],
}
