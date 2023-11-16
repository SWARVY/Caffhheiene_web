/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    hljs: {
      theme: 'tokyo-night-dark',
    },
    fontFamily: {
      BlogTitle: ['Title', 'sans-serif'],
      BlogContent: ['Content', 'sans-serif'],
    },
    extend: {
      colors: {
        white_hover: '#EEE',
        white_hover_weight: '#DDD',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-highlightjs'),
  ],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  darkMode: 'class',
}
