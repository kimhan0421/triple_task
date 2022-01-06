import { css, Global } from '@emotion/react'

import importFonts from '../lib/importFonts'

function globalStyles() {
  return (
    <Global
      styles={css`
        ${importFonts}

        html,
        body {
          min-width: 1200px;
          padding: 0;
          margin: 0;
          vertical-align: baseline;
        }

        * {
          color: inherit;
          box-sizing: border-box;
        }
      `}
    />
  )
}

export default globalStyles
