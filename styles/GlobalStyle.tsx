import { css, Global } from '@emotion/react'

import importFonts from '../lib/importFonts'

function globalStyles() {
  return (
    <Global
      styles={css`
        ${importFonts}

        html,
        body {
          width: 1040px;
          min-width: 1200px;
          padding: 0px;
          border: 0px;
          font: inherit;
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
