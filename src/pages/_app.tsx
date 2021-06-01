import { AppProps } from 'next/app'
import Head from 'next/head'

import bootstrap from '@src/lib/bootstrap'

import '@src/styles/globals.css'

bootstrap()

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
