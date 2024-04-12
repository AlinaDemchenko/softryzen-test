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
    extend: {
      container: {
        center: true, 
        padding: {
          DEFAULT: '1.5rem',
          sm: '1.25rem',
          md: '1.5rem',
          xl: '1.5rem',
        },},
        screens: {
          'xl': '1440px',
        },
        keyframes:{
          sliderBack: {
            "0%": {
              transform: "translateX(0)"
            },
            "99%": {
              transform: "translateX(-100%)",
            },
            "100%": {
              transform: "translateX(100%)",
            },
          },
          sliderForward: {
            "100%": {
              transform: "translateX(0)",
            },
          },
          kenburnsRight:{
            "0%": {
                      transform: "scale(1) translate(0, 0)",
                      transformOrigin: "84% 50%"
            },
            "100%": {
                      transform: "scale(1.15) translateX(15px)",
                      transformOrigin: "right"
            }
          },
          kenburnsLeft:{
            "0%": {
                      transform: "scale(1) translate(0, 0)",
                      transformOrigin: "16% 50%"
            },
            "100%": {
                      transform: "scale(1.15) translate(-20px, 15px)",
                      transformOrigin: "left"
            }
          }
        }
    },
  },
  plugins: [],
}
