import Link from 'next/link'

import classes from './LandingPanel.module.css'

export default function LandingPanel() {
  return (
    <section
      className={`h-full bg-homestay-art bg-cover bg-fixed bg-center bg-gray-900 bg-blend-overlay
        text-5xl md:text-7xl lg:text-7xl tracking-widest
        text-center flex flex-col items-center justify-around uppercase font-black text-green-200 text-opacity-70 font-landing`}>
      <div className='px-4'>
        <p className=''>The dopest Homestays are waiting for you!</p>
        <p className=''>What are you waiting for?</p>
        <Link href='/explore'>
          <button className='bg-green-600 text-gray-50 py-4 px-8 mt-12 font-semibold text-4xl rounded-md'>
            EXPLORE
          </button>
        </Link>
      </div>
    </section>
  )
}
