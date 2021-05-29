import { ApolloClient, InMemoryCache } from '@apollo/client'
const uri = process.env.NODE_ENV === 'production' ? process.env.GRAPHQL_URL : 'http://localhost:3001/graphql'
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
})

export default client
