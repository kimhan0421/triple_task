const importSansSerif = `
@font-face {
  font-family: 'SansSerif';
  src: url('/font/SansSerif.otf') format('truetype');
}`

const importFonts = `
${importSansSerif}
  html {
   font-family: sans-serif;
  }
`

export default importFonts
