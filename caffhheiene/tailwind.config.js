/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      BlogTitle: ['BlogTitle', 'sans-serif'],
      BlogContent: ['BlogContent', 'sans-serif'],
      BlogPost: ['BlogPost', 'sans-serif'],
      BlogDeco: ['BlogDeco', 'sans-serif'],
    },
    extend: {
      colors: {
        white_hover: '#EEE',
        white_hover_weight: '#DDD',
        background_dark: '#1E1E1E',
        background_component: '#2B2B2B',
        ochre_dark: '#8F5C23',
        ochre: '#CC7832',
        ochre_light: '#D69749',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
