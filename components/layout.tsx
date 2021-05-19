import { Fragment } from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <Fragment>
      <header className='flex items-center justify-between p-4 pl-8 pr-8'>
        <h1 className='font-bold text-green-700 dark:text-green-400'>
          <Link href='/'>DOPE HOMESTAYS</Link>
        </h1>
        <nav className='flex items-center justify-between gap-8 font-semibold'>
          <h2 className=' text-green-700 dark:text-green-400'>
            <Link href='/signup'>Signup</Link>
          </h2>
          <h2 className=' text-green-700 dark:text-green-400'>
            <Link href='/signin'>Signin</Link>
          </h2>
        </nav>
      </header>
      <main className=''>{children}</main>
      <footer className='flex items-center justify-center dark:text-gray-100'>
        Powered by
        <span className='p-1 font-semibold text-blue-700 dark:text-blue-400'>
          <Link href='/contact'>Bhoboghurey Company</Link>
        </span>
      </footer>
    </Fragment>
  )
}
