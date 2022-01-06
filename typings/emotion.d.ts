import '@emotion/react'
import type { Theme as MyTheme } from '../styles/theme'

declare module '@emotion/react' {
  export type Theme = MyTheme
}
