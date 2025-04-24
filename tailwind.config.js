// Add the following line in your config file
 module.exports = {
   darkMode: 'class',
   content: ['./index.html', './src/**/*.{js,jsx}'],
   theme: {
    extend: {
      keyframes: {
        orbit: {
          '0%': { top: '0%', left: '0%' },
          '25%': { top: '0%', left: '100%' },
          '50%': { top: '100%', left: '100%' },
          '75%': { top: '100%', left: '0%' },
          '100%': { top: '0%', left: '0%' },
        },
      },
      animation: {
        orbit: 'orbit 5s linear infinite',
      },
    },
  }
  ,
   plugins: [],
 };