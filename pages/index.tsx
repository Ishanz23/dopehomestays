import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'

import Homestays from '../components/Homestays'
import client from '../apollo-client'
import { Fragment } from 'react'

export default function Home({ homestays, error }) {
  return (
    <Fragment>
      {error || !homestays ? (
        <div className='dark:text-gray-100'>Something went wrong!</div>
      ) : (
        <Homestays homestays={homestays} />
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
