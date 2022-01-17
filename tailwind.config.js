module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      'blue-dark': '#262737',
      'white': '#ffffff',
      'smoke': '#f5f5f5',
      'green': '#00DFB6',
      'gray-dark': '#4E4D56',
      'gray-light': '#C4C4C4',
      'black': '#000000',
      'g-green': '#3cba54',
      'g-yellow': '#f4c20d',
      'g-red': '#db3236',
      'g-blue': '#4885ed'
    },
    height: {
      'h-3': '3rem',
      'h-4': '4rem',
      'h-5': '5rem',
      'h-40': '40px',
      'h-90': '90px',
      'h-200': '200px',
      'h-40v': '40vh',
      'h-50': '50vh',
      'h-50p': '50%',
      'h-100': '100vh',
      'h-full': '100%',
      'h-auto': 'auto',
      'max-h-c': 'max-height: 26rem',
      'min-h-c': 'min-height: 26rem',
      'h-64': '16rem',
    },
    width: {
      'w-25': '25%',
      'w-50': '50vw',
      'w-100p': '100px',
      'w-50p': '50%',
      'w-33': '33%',
      'w-100': '100vw',
      'w-full': '100%',
      'w-auto': 'auto',
      'w-64': '16rem'
    }
  },
  plugins: []
};
