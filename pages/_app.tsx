import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@emotion/react'

import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Triple</title>
        <meta name="description" content="a section of the homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  )
}

export default MyApp
