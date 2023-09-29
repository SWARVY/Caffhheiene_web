/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      LINE_Bd: ['LINE_Bd', 'sans-serif'],
      LINE_Rg: ['LINE_Rg', 'sans-serif'],
      LINE_Th: ['LINE_Th', 'sans-serif'],
      MABINOGI_Classic: ['MABINOGI_Classic', 'sans-serif'],
      DOS_Bd: ['DOS_Bd', 'sans-serif'],
    },
    extend: {
      colors: {
        white_hover: '#EEE',
        white_hover_weight: '#DDD',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        purple_to_green: ['#845ec2', '#eb4d9f', '#ff695a', '#feac00', '#a8eb12'],
      },
    },
  },
  plugins: [],
};
