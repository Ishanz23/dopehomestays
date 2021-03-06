import Image from 'next/image'

import { LocationMarkerIcon } from '@heroicons/react/solid'
import { PropsWithChildren } from 'react'
import { Homestay } from '../models/Homestay'

export default function Homestays({ homestays }: PropsWithChildren<{ homestays: Homestay[] }>) {
  return (
    <div className='w-full flex flex-col flex-wrap lg:flex-row gap-8 p-4 lg:items-center justify-between'>
      {homestays.map((homestay) => (
        <div
          key={homestay._id}
          className='bg-gray-50 dark:bg-gray-800 w-full h-full sm:flex shadow-md rounded-xl overflow-hidden'>
          {homestay.coverImage && homestay.coverImage.path && (
            <div className='sm:flex-shrink-0 h-full sm:w-2/5'>
              <Image
                src={homestay.coverImage.path}
                alt={homestay.coverImage.name}
                layout='responsive'
                width={300}
                height={200}
                className='h-48 w-full object-cover md:h-full md:w-48'></Image>
            </div>
          )}
          <div className='p-8 text-gray-800 dark:text-gray-100'>
            <h3 className='font-semibold text-green-600 dark:text-green-300'>{homestay.name}</h3>

            <p className='dark:text-green-200 text-sm flex mt-2'>
              <LocationMarkerIcon className='h-5 w-5 mr-2' /> {homestay.place}
            </p>
            {homestay.owners && homestay.owners.length ? (
              <p className='dark:text-gray-200 text-sm lg:text:xs mt-2'>
                Owned by{' '}
                <span>
                  {homestay.owners.map((owner) => (
                    <span key={owner._id}>
                      {owner.firstName} {owner.lastName}
                    </span>
                  ))}
                </span>
              </p>
            ) : (
              ''
            )}
            <p className='mt-4 dark:text-gray-200 text-sm font-light'>{homestay.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
