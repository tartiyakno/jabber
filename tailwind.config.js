/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['Roboto', 'cursive'],
      },
      colors: {
        'primary': '#231F33',
        'black': '#000000',
        'black-lite': '#1E1E1E',
        'blacky': '#202020',
        'white-lite': '#E8E8E8',
        'white-2lite': '#E9E9E9',
        'navbtnbg': 'var(--nav-btn-bg)',
        'yellow': '#FFF000',
      },
      animation: {
        'scaleanim': 'scaleanim 1.6s linear infinite',
        'animate-fadeIn' : 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        scaleanim: {
          '0%, 100%': { scale: '1' },
          '50%': { scale: '1.1' },
        },
        fadeIn:{
          '0%': {opacity: '0'},
          '100%' : {opacity: '1'}
        }
      },
      scrollbar: ['no-scrollbar'],
    },
  },
  plugins: [],
}
