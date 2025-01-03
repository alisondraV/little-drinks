/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#7A5F4A',
        beige: '#F2E8CF',
        'light-green': '#CECB82',
        green: '#B2BD7E',
        'dark-green': '#749C75',
        purple: '#6A5D7B',
        'dark-purple': '#5D4A66',
      },
      fontFamily: {
        'header': ['Stardom', 'sans-serif'],
        'regular': ['Zodiak', 'sans-serif']
      },
    },
  },
  plugins: [],
}

