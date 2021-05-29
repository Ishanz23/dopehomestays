import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navigate } from '@reach/router'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  function navigate(path: string) {
    return () => {
      setIsMenuOpen(!isMenuOpen)
      router.push(path)
    }
  }

  return (
    <nav className='relative h-full p-4 flex justify-between items-center shadow-md text-green-600 dark:text-green-400 uppercase'>
      {/* Logo / Company Name */}
      <div className='logo lg:text-2xl tracking-widest cursor-pointer transition-all duration-300 ease-in-out hover:text-green-500'>
        <Link href='/'>dope homestays</Link>
      </div>
      {/* Hamburger Menu */}
      <div className='relative sm:max-w-xl cursor-pointer hover:text-green-500 transition-colors duration-300 ease-in-out'>
        <button
          className='text-green-600 dark:text-green-300 w-10 h-10 relative rounded-md focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-300'
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className='block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2'>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? 'rotate-45' : ' -translate-y-1.5'
              }`}></span>
            <span
              aria-hidden='true'
              className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? 'opacity-0 w-0' : ''
              }`}></span>
            <span
              aria-hidden='true'
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isMenuOpen ? '-rotate-45' : ' translate-y-1.5'
              }`}></span>
          </div>
        </button>
      </div>
      {/* Sidebar */}
      <ul
        className={`absolute flex flex-col items-center justify-center md:justify-start top-full right-0 w-full min-h-body bg-gray-300 dark:bg-gray-800 md:w-1/3 lg:w-1/4 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}>
        <li
          onClick={navigate('/')}
          className='nav-link w-full list-none tracking-wide h-full px-4 py-6 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900 text-center'>
          HOME
        </li>
        <li
          onClick={navigate('/signin')}
          className='nav-link w-full list-none tracking-wide h-full px-4 py-6 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900 text-center'>
          SIGN IN
        </li>
        <li
          onClick={navigate('/signup')}
          className='nav-link w-full list-none tracking-wide h-full px-4 py-6 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900 text-center'>
          SIGN UP
        </li>
        <li
          onClick={navigate('/homestays')}
          className='nav-link w-full list-none tracking-wide h-full px-4 py-6 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900 text-center'>
          HOMESTAYS
        </li>
        <li
          onClick={navigate('/explore')}
          className='bg-green-600 text-gray-100 w-full list-none tracking-wide h-full px-4 py-6 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:bg-green-700 text-center'>
          EXPLORE
        </li>
        {/* <li className='nav-link list-none tracking-wide text-sm h-full text-green-600 dark:text-green-400 cursor-pointer uppercase transition-all ease-in-out duration-300 hover:text-green-700 dark:hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-900'>
            PROFILE
          </li> */}
      </ul>
    </nav>
  )
}
