import { css, Global } from '@emotion/react'

import importFonts from '../lib/importFonts'

function globalStyles() {
  return (
    <Global
      styles={css`
        ${importFonts}

        html,
        body {
          vertical-align: baseline;
          min-width: 1200px;
          padding: 0;
          margin: 0;
          border: 0;
          text-size-adjust: none;
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
