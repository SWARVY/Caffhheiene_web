/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      Pretendard: ['Pretendard', 'sans-serif'],
      Consolas: ['Consolas', 'sans-serif'],
    },
    extend: {
      colors: {
        white_hover: '#EEE',
        white_hover_weight: '#DDD',
        background_dark: '#1E1E1E',
        background_component: '#2B2B2B',
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
