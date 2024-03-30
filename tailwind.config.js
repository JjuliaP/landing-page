/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px',
    },
    lineHeight: {
      'leading-4.5': '18px',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif', ],
      circular: ['Circular', 'sans-serif', ],
    },
    colors:{
      white: '#FFFFFF',
      lightWhite:'#F3F5FF',
      grey: '#A0A8C3',
      darkGrey:'#979FAD',
      whisper: '#E8E6E6',
      green: '#0BD88F',
      greenOpacity20: '#0BD88F33',
      dark:'#212435',
      veryDark: '#0E0E1033',
      lightGrey:'#737B98',
      greyOpacity90:"#2B2F44E5"
}
  },
  plugins: [],
}

