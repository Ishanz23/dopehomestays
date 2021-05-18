import Head from 'next/head'

import styles from '../styles/Home.module.css'

const login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dope Homestays</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Dope Homestays!</h1>
        {/* <ClientOnly>
          <Homestays />
        </ClientOnly> */}
      </main>

      <footer className={styles.footer}>Powered by Bhoboghurey Company</footer>
    </div>
  )
}

export default login
