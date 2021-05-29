import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import gql from 'graphql-tag'
import client from '../apollo-client'

import Homestays from '../components/Homestays'

export default function HomestaysPage({ homestays, error }) {
  return (
    <section className='min-height-main p-4 bg-landing-cover bg-cover bg-fixed bg-gray-900 bg-blend-overlay grid place-items-center text-gray-100'>
      {error || !homestays ? (
        <div className='dark:text-gray-100'>Something went wrong!</div>
      ) : (
        <Fragment>
          <Homestays homestays={homestays} />
        </Fragment>
      )}
    </section>
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
  const { data, error } = await client.query({
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
