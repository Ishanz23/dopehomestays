import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import client from '../apollo-client'
import Layout from '../components/layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Dope Homestays</title>
        <meta name='description' content='The best and less explored homestays under one website' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='app'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </section>
    </ApolloProvider>
  )
}

export default MyApp
