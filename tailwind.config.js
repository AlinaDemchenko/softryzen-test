/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    letterSpacing: {
      'widest': '.185em',
      'wider': '.1em',
      'normal': '0',
      'tighter': '-.04em',},
    extend: {
      container: {
        center: true, 
        padding: {
          DEFAULT: '1.5rem',
          sm: '1.25rem',
          md: '1.5rem',
          xl: '1.5rem',
        },}
    },
  },
  plugins: [],
}
