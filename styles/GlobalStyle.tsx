import { css, Global } from '@emotion/react'

import importFonts from '../lib/importFonts'

function globalStyles() {
  return (
    <Global
      styles={css`
        ${importFonts}

        html,
        body {
          background: #fff;
          color: #fff;
          min-width: 1200px;
          padding: 0px;
          border: 0px;
          font: inherit;
          vertical-align: baseline;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
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
