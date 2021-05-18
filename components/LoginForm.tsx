import { gql, useMutation } from '@apollo/client'

const MUTATION = gql`
  mutation ownerLogin($email: String!, $password: String!) {
    ownerLogin(email: $email, password: $password) {
      token
      email
    }
  }
`
export default function LoginForm() {
  const [ownerLogin, { data, loading, called }] = useMutation(MUTATION)

  return (
    <div>
      <form onSubmit={(e) => {}}></form>
    </div>
  )
}
