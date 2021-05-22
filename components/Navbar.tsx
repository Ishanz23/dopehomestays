import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav className='p-4 flex justify-between items-center shadow-md text-green-600 dark:text-green-400 uppercase'>
        <div className='logo lg:text-2xl tracking-widest cursor-pointer transition-all duration-300 ease-in-out hover:text-green-500'>
          <Link href='/'>dope homestays</Link>
        </div>

        <div className='md:hidden cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out'>
          <MenuIcon className='h-7 w-7' />
        </div>

        <ul className={`hidden md:flex md:items-center md:justify-between w-1/3`}>
          <li className='nav-link list-none tracking-wide text-sm h-full cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900'>
            <Link href='/signin'>SIGN IN</Link>
          </li>
          <li className='nav-link list-none tracking-wide text-sm h-full text-green-600 dark:text-green-400 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900'>
            <Link href='/signup'>SIGN UP</Link>
          </li>
          <li className='nav-link list-none tracking-wide text-sm h-full text-green-600 dark:text-green-400 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900'>
            <Link href='/homestays'>HOMESTAYS</Link>
          </li>
          {/* <li className='nav-link list-none tracking-wide text-sm h-full text-green-600 dark:text-green-400 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900'>
            PROFILE
          </li> */}
        </ul>
      </nav>
    </header>
  )
}
