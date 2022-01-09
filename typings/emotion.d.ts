import '@emotion/react'
import type { Theme as MyTheme } from 'styles/theme'

declare module '@emotion/react' {
  export interface Theme extends MyTheme {
    colors: {
      gray70: string
      gray80: string
      gray100: string
    }
  }
}
