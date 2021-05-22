import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'

import Homestays from '../components/Homestays'
import client from '../apollo-client'
import { Fragment } from 'react'
import LandingPanel from '../components/LandingPanel'
import { Homestay } from '../models/Homestay'

export default function Home({ homestays, error }) {
  return (
    <Fragment>
      {error || !homestays ? (
        <div className='dark:text-gray-100'>Something went wrong!</div>
      ) : (
        <Fragment>
          <LandingPanel />
          <Homestays homestays={homestays} />
        </Fragment>
      )}
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
