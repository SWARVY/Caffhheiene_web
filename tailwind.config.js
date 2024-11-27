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
      screens: {
        xs: '480px',
      },
      colors: {
        light_main: '#212B42',
        light_background: '#FFFFFF',
        light_component: '#F2F4F8',
        light_component_hover: '#E4E8F0',
        light_progress_background: '#E8ECF3',
        light_progress_inner: '#22C55E',
        dark_main: '#3B4A5C',
        dark_background: '#141923',
        dark_component: '#232B3A',
        dark_component_hover: '#2E3A4D',
        dark_progress_background: '#1C2432',
        dark_progress_inner: '#34D399',
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
