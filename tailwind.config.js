// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        lightBg: '#ffffff',
        lightText: '#000000',
        darkBg: '#000000',
        darkText: '#ffffff',
        dayBackground: 'rgb(125, 125, 125, 0.3)',
        nightBackground: 'rgb(0, 0, 0, 0.5)',
      },
      boxShadow: {
        justShadow: '0px 0px 16px -1px rgba(34, 60, 80, 0.14)',
        blackShadow: '0px 0px 16px -1px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
