module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#F06825',
        brandmiddle: '#FFBB4D',
        branddark: '#CD4D0E',
        brandlight: '#FFF7F2',
        secondary: '#6825F0',
        background: '#141F26',
        foreground: '#E4DACE',
        accent: '#A5F0B6'
      }
    },
    fontFamily: {
      'sans': ['IBM Plex Sans', 'system-ui'],
      'display': ['Kanit', 'system-ui'],
      'heading': ['Kanit', 'system-ui'],
      'body': ['IBM Plex Sans', 'system-ui']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
