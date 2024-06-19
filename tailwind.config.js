/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: ["./pages/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
          'sacramento': ['"Sacramento"', 'cursive'],
        },
        padding: {
          'custom': 'calc((100vw - 1536px)/2)',
          'custom-2': 'calc((100vw - 2560px)/2)',
        },
        screens: {
          '1380': '1380px',          
        },
        colors: {             
          redcustom: '#D00000',
          orangecustom: '#FF8906',
        },
      },
    },
    plugins: [],
  }

export default tailwindConfig;