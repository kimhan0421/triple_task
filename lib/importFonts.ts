const importSansSerif = `
@font-face {
  font-family: 'SansSerif';
  src: url('/font/SansSerif.otf') format('truetype');;
}`

const importFonts = `
${importSansSerif}
  html {
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

export default importFonts
