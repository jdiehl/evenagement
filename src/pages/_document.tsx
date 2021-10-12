/* eslint-disable evenagement/separate-ui-components */
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#5E3A83" />
        </Head>
        <body className="bg-primary-dark">
          <div className="bg-white">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
