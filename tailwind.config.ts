/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom Pantone colors
        'desert-flower': '#FF96B7',
        'cattleya-orchid': '#9C4CBD',
        'opera-mauve': '#CA80B1',
        'blue-curacao': '#33BECC',
        'spicy-mustard': '#D8AE48',
        'mocha-mousse': '#A47864',
        'arabesque': '#D16F52',
        
        // Dark mode specific colors
        dark: {
          'bg-primary': '#121212',
          'bg-secondary': '#1E1E1E',
          'text-primary': '#FFFFFF',
          'text-secondary': '#A0A0A0',
        },
        
        // Light mode specific colors
        light: {
          'bg-primary': '#FFFFFF',
          'bg-secondary': '#F5F5F5',
          'text-primary': '#1A1A1A',
          'text-secondary': '#666666',
        }
      },
      gradients: {
        'primary': 'linear-gradient(to right, var(--tw-colors-desert-flower), var(--tw-colors-cattleya-orchid))',
        'secondary': 'linear-gradient(to right, var(--tw-colors-blue-curacao), var(--tw-colors-opera-mauve))',
      },
    },
  },
  plugins: [],
}