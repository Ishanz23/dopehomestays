import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import gql from 'graphql-tag'
import client from '../apollo-client'

import Homestays from '../components/Homestays'

export default function HomestaysPage({ homestays, error }) {
  return (
    <Fragment>
      {error || !homestays ? (
        <div className='dark:text-gray-100'>Something went wrong!</div>
      ) : (
        <Fragment>
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
