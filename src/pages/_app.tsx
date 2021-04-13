import { AppProps } from 'next/app'
import Head from 'next/head'

import { init } from '../services/firebase'
import '../styles/globals.css'

init()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Evenagement</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
