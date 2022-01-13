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
      'green': '#00DFB6',
      'gray-dark': '#4E4D56',
      'gray-light': '#C4C4C4'
    },
    height: {
      'h-5': '5rem',
      'h-40': '40px',
      'h-90': '90px',
      'h-200': '200px',
      'h-50': '50vh',
      'h-50p': '50%',
      'h-100': '100vh',
      'h-full': '100%',
      'h-auto': 'auto',
      'max-h-c': 'max-height: 26rem'
    },
    width: {
      'w-25': '25%',
      'w-50': '50vw',
      'w-50p': '50%',
      'w-33': '33%',
      'w-100': '100vw',
      'w-full': '100%',
      'w-auto': 'auto'
    }
  },
  plugins: []
};
