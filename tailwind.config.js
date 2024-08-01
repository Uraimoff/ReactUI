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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
