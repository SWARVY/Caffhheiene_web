/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    hljs: {
      theme: 'monokai-sublime',
    },
    fontFamily: {
      MABINOGI_Classic: ['MABINOGI_Classic', 'sans-serif'],
      NanumBarunpen_Rg: ['NanumBarunpen_Rg', 'sans-serif'],
      AppleGothic_Lg: ['AppleGothic_Lg', 'sans-serif'],
      AppleGothic_Rg: ['AppleGothic_Rg', 'sans-serif'],
      AppleGothic_Md: ['AppleGothic_Md', 'sans-serif'],
    },
    extend: {
      colors: {
        white_hover: '#EEE',
        white_hover_weight: '#DDD',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        purple_to_green: [
          '#845ec2',
          '#eb4d9f',
          '#ff695a',
          '#feac00',
          '#a8eb12',
        ],
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
}
