import React, { Fragment } from 'react'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import { Homestay } from '../models/Homestay'
import Homestays from '../components/Homestays'

export default function ExplorePage({ homestays, error }) {
  return (
    <Fragment>
      <section className='h-screen p-4 bg-landing-cover bg-cover bg-gray-900 bg-blend-overlay grid place-items-center text-gray-100'>
        Locations
      </section>
      <section className='h-screen p-4 bg-homestay-cover bg-cover bg-gray-900 bg-blend-overlay grid place-items-center text-gray-100'>
        <div className='text-center text-5xl font-landing w-full px-4 py-4 flex items-center justify-center bg-gray-700 opacity-80'>
          <caption>Top Homestays</caption>
        </div>
        {error ? (
          <div>Oops! Where did the homestays go? Let us check right now!</div>
        ) : (
          <Homestays homestays={homestays} />
        )}
      </section>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const query = gql`
    query {
      homestays {
        _id
        name
        place
        description
        owners {
          _id
          firstName
          lastName
        }
        coverImage {
          name
          path
        }
      }
    }
  `
  const { data, error } = await client.query<{ homestays: Homestay[] }>({
    query,
  })

  if (error) {
    return {
      props: {
        error,
      },
      revalidate: 600,
    }
  }

  return {
    props: {
      homestays: data.homestays || [],
    },
    revalidate: 43200,
  }
}
