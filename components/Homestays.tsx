import Image from 'next/image'

export default function Homestays({ homestays }) {
  return (
    <div className='w-full flex flex-col flex-wrap lg:flex-row p-4 lg:items-center justify-between'>
      {homestays.map((homestay) => (
        <div key={homestay._id} className='w-full lg:w-1/2 lg:min-w-1/2 h-full'>
          <div className='sm:flex m-4 shadow-md rounded-xl overflow-hidden'>
            {homestay.coverImage && homestay.coverImage.path && (
              <div className='sm:flex-shrink-0 h-full sm:w-2/5'>
                <Image
                  src={homestay.coverImage.path}
                  alt={homestay.coverImage.name}
                  layout='responsive'
                  width={250}
                  height={250}
                  className='h-48 w-full object-cover md:h-full md:w-48'></Image>
              </div>
            )}
            <div className='p-8'>
              <h3 className='font-semibold text-green-600 dark:text-green-300'>{homestay.name}</h3>
              <p className='dark:text-gray-200'>
                {homestay.name} - {homestay.place} - {homestay.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
