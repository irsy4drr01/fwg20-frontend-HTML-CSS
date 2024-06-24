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
          'ss': '375px',
          's': '425px',
          '2s': '440px',
          '2ss': '520px',
          'sm':	'640px',
          'md':	'768px',
          'lg':	'1024px',
          'xl':	'1280px',
          '1.5xl': '1380px',
          '2xl':	'1536px',
        },
        colors: {             
          redcustom: '#D00000',
          orangecustom: '#FF8906',
          grayfooter: '#F8F8F8',
        },
        gridTemplateRows: {
          '8-custom': 'repeat(8, minmax(0, auto))',
        },
      },
    },
    plugins: [],
  }

export default tailwindConfig;