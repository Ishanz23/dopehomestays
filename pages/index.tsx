import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'

import Homestays from '../components/Homestays'
import client from '../apollo-client'
import { Fragment } from 'react'
import LandingPanel from '../components/LandingPanel'
import { Homestay } from '../models/Homestay'

export default function Home({ homestays, error }) {
  return <LandingPanel />
}
