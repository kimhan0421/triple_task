import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/GlobalStyle'

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
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
