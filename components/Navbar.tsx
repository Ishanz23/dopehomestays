import { useState } from 'react'
import Link from 'next/link'

import classes from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav className='p-4 flex justify-between items-center shadow-md text-green-600 dark:text-green-400 uppercase'>
        <div className='logo lg:text-2xl tracking-widest cursor-pointer transition-all duration-300 ease-in-out hover:text-green-500'>
          <Link href='/'>dope homestays</Link>
        </div>

        <div className='lg:hidden cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            />
          </svg>
        </div>

        <ul className={`hidden lg:flex lg:items-center lg:justify-between w-1/3`}>
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
    // <header className='w-full p-4 shadow-md flex flex-wrap items-center text-green-700 dark:text-green-400'>
    //   <div className='w-full flex justify-between items-center dark:text-green-400'>
    //     <Link href='/'>
    //       <a className='dark:text-green-400 uppercase'>DOPE HOMESTAYS</a>
    //     </Link>
    //     <label htmlFor='menu-toggle' className='pointer-cursor md:hidden block'>
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         className='h-5 w-7 dark:text-green-400'
    //         viewBox='0 0 20 20'
    //         fill='currentColor'>
    //         <path
    //           fill-rule='evenodd'
    //           d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
    //           clip-rule='evenodd'
    //         />
    //       </svg>
    //     </label>
    //   </div>

    //   {/* <input className='hidden' type='checkbox' id='menu-toggle' /> */}

    //   <div className='hidden md:flex md:items-center md:w-auto w-full' id='menu'>
    //     <nav>
    //       <ul className='md:flex items-center justify-between text-base pt-4 md:pt-0'>
    //         <li>
    //           <Link href='/homestays'>
    //             <a className='md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400' href='#'>
    //               Homestays
    //             </a>
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     {/* <a href='#' className='lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor'>
    //       <img
    //         className='rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400'
    //         src='https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg'
    //         alt='Andy Leverenz'
    //       />
    //     </a> */}
    //   </div>
    // </header>
  )
}
