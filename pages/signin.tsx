import { gql, useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const EMAIL_LOGIN_MUTATION = gql`
  mutation ownerLogin($email: String!, $password: String!) {
    ownerLogin(email: $email, password: $password) {
      token
      email
    }
  }
`
const MOBILE_LOGIN_MUTATION = gql`
  mutation ownerLogin($mobile: String!, $password: String!) {
    ownerLogin(mobile: $mobile, password: $password) {
      token
      mobile
    }
  }
`

interface LoginResponse {
  ownerLogin: {
    token: string
    email?: string
    mobile?: string
  }
}

export default function SigninPage() {
  const [emailLogin, { data: emailLoginData, loading: emailLoginLoading, error: emailLoginError }] =
    useMutation<LoginResponse>(EMAIL_LOGIN_MUTATION)
  const [mobileLogin, mobileLoginRes] = useMutation<LoginResponse>(MOBILE_LOGIN_MUTATION)
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      mobile: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values)
      if (values.email) {
        await emailLogin({ variables: { email: values.email, password: values.password } })
        console.log(emailLoginData)
        if (emailLoginData && emailLoginData.ownerLogin) {
          localStorage.setItem('token', emailLoginData.ownerLogin.token)
        }
      } else if (values.mobile) {
        await mobileLogin({ variables: { mobile: values.mobile, password: values.password } })
        console.log(mobileLoginRes)
      }
    },
  })

  return (
    <div className='h-full w-full md:flex items-center justify-center'>
      <div className='md:flex-grow'>
        <h2 className='text-center font-semibold mb-8 dark:text-gray-200'>
          Sign in your account to check exclusive offers
        </h2>
        <p className='text-center font-light dark:text-gray-200'>
          Not Registered yet ?
          <Link href='/signup'>
            <a className='text-green-700 font-normal dark:text-green-400 ml-2'>Sign Up</a>
          </Link>
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className='card px-8 md:w-1/2 lg:w-2/5 flex flex-col dark:text-gray-300'>
        <div className='input-container relative'>
          <label htmlFor='password' className='mb-1 md:w-1/3 font-semibold'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email'
            {...formik.getFieldProps('email')}
            className='input-field'
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <h3 className='text-center font-semibold text-green-600 dark:text-green-400'>OR</h3>
        <div className='input-container'>
          <label htmlFor='password' className='mb-1 md:w-1/3 font-semibold'>
            Mobile
          </label>
          <input
            id='mobile'
            name='mobile'
            type='tel'
            placeholder='Mobile'
            {...formik.getFieldProps('mobile')}
            className='input-field'
          />
          {formik.touched.mobile && formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
        </div>
        <div className='input-container'>
          <label htmlFor='password' className='mb-1 md:w-1/3 font-semibold'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            {...formik.getFieldProps('password')}
            className='input-field'
          />
          {formik.touched.mobile && formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
        </div>
        <button
          type='submit'
          className='px-4 mt-4 mb-4 py-2 text-sm font-semibold rounded-md text-gray-200 bg-green-600 border-2 border-transparent uppercase tracking-wider hover:bg-transparent hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600'>
          sign in
        </button>

        {emailLoginError ? <p className='p-4 text-red-500'>Login failed</p> : ''}
      </form>
    </div>
  )
}
