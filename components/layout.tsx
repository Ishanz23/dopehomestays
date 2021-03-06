import { Fragment, useRef } from 'react'
import Link from 'next/link'

import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <Fragment>
      <header className={`fixed w-full h-16 top-0 z-50 bg-gray-100 dark:bg-gray-900`}>
        <Navbar></Navbar>
      </header>
      <div className='dummy-header h-16'></div>
      <main className=''>{children}</main>
      <footer className='flex px-4 py-2 items-center justify-center'>
        Powered by
        <span className='p-2 font-semibold text-green-700 dark:text-green-400'>
          <Link href='/contact'>Bhoboghurey Company</Link>
        </span>
      </footer>
    </Fragment>
  )
}
