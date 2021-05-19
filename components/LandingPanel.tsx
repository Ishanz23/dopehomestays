export default function LandingPanel() {
  return (
    <section
      className='landing-panel bg-landing-cover bg-cover bg-fixed bg-clip-text py-12 gap-12 text-7xl lg:text-8xl tracking-widest flex flex-col text-center items-center justify-evenly rounded-md dark:bg-gray-800'
      title='Photo by Chris Rosiak'>
      <p className='flex flex-wrap items-center justify-center uppercase font-black dark:text-transparent'>
        The dopest <p className='px-4 tracking-wide uppercase font-black dark:text-green-500'>Homestays</p> are waiting
        for you!
      </p>
      <p className='uppercase font-black dark:text-transparent'>What are you waiting for?</p>
    </section>
  )
}
