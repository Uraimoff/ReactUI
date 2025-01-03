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
        defaultLightBg: '#F9FAFB',
        secondaryLightBg: '#E5E7EB',
        defaultDarkBg: '#1A1A1A',
        secondaryDarkBg: '#2C2C2E',
        // nightBackground: 'rgb(0, 0, 0, 0.5)',
        defaultBlue: '#3B82F6'
      },
      boxShadow: {
        justShadow: '0px 0px 16px -1px rgba(34, 60, 80, 0.14)',
        blackShadow: '0px 0px 16px -1px rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        sans: [ 'system-ui', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
