/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'underdog-yellow': '#ffcc00',
      },
    },
  },
  plugins: [],
};
