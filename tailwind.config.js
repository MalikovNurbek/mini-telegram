/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#4d4d4d',
        'light': '#efefef',
        'primary': '#2b5278',
        'message-bg': '#182533',
      },
      backgroundImage: {
        'dark-bg': 'url("https://celes.club/uploads/posts/2022-06/thumbs/1654787498_1-celes-club-p-oboi-chata-iz-telegramma-krasivie-1.jpg")',
        'light-bg': 'url("https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?w=2000")',
      },
    },
  },
  plugins: [],
}
