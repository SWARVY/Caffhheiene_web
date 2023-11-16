/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    hljs: {
      theme: 'monokai-sublime',
    },
    fontFamily: {
      ChungbukJikji: ['ChungbukJikji', 'sans-serif'],
      SeoulHangangLong_Lg: ['SeoulHangangLong_Lg', 'sans-serif'],
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
