/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'tahiti': {
        100: '#65e1d9',
        200: '#F9FAFB',
        300: '#F3F4F6',
        400: '#E5E7EB',
        500: '#000000',
        600: '#1C2431',
        700: '#181F2A',
        800: '#212A3B',
        900: '#00CD98',
        950: '#008D00',
        
      },
    },
  },
  plugins: [],
  
}