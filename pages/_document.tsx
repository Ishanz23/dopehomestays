import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
