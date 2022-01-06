const importSansSerif = `
@font-face {
  font-family: 'sans-serif';
  src: url('/font/SansSerif.otf') format('truetype');;
}
`

const importFonts = `
  ${importSansSerif}
  html {
    font-family: sans-serif;
    font-display: swap;
  }
`

export default importFonts
