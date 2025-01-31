module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5EDF0',
        text: '#0D0E20',
        cta: '#592F83',
        accent: '#391B49',
        secondary: '#D1CCDC',
      },
    },
  },
  plugins: [],
};