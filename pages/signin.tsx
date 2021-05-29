import { gql, useMutation } from '@apollo/client'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import * as Yup from 'yup'

import Radio from '../components/form-fields/Radio'
import TextInput from '../components/form-fields/TextInput'

const EMAIL_LOGIN_MUTATION = gql`
  mutation travelerLogin($email: String!, $password: String!) {
    travelerLogin(email: $email, password: $password) {
      token
      email
    }
  }
`
const MOBILE_LOGIN_MUTATION = gql`
  mutation travelerLogin($mobile: String!, $password: String!) {
    travelerMobileLogin(mobile: $mobile, password: $password) {
      token
      mobile
    }
  }
`

interface LoginResponse {
  travelerLogin: {
    token: string
    email?: string
    mobile?: string
  }
}

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  mobile: Yup.number()
    .positive('Invalid mobile no')
    .integer('Inavlid mobile no')
    .min(1000000000, 'Invalid mobile no')
    .max(9999999999, 'Invalid mobile no'),
  password: Yup.string().required('Please enter password'),
})

export default function SigninPage() {
  const [
    emailLogin,
    { data: emailLoginData, loading: emailLoginLoading, error: emailLoginError },
  ] = useMutation<LoginResponse>(EMAIL_LOGIN_MUTATION)
  const [
    mobileLogin,
    { data: mobileLoginData, loading: mobileLoginLoading, error: mobileLoginError },
  ] = useMutation<LoginResponse>(MOBILE_LOGIN_MUTATION)

  const signin = async (values) => {
    console.log(values)
    if (values.email) {
      try {
        await emailLogin({ variables: { email: values.email, password: values.password } })
        if (emailLoginData && emailLoginData.travelerLogin) {
          localStorage.setItem('token', emailLoginData.travelerLogin.token)
        }
      } catch (error) {
        console.log(error)
        console.log(emailLoginError.message)
      }
    } else if (values.mobile) {
      await mobileLogin({ variables: { mobile: values.mobile, password: values.password } })
      if (mobileLoginData && mobileLoginData.travelerLogin) {
        localStorage.setItem('token', emailLoginData.travelerLogin.token)
      }
    }
  }

  const onLoginTypeChange = (loginType: 'email' | 'mobile') => {
    console.log(loginType)
  }

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
      <Formik
        initialValues={{
          loginType: 'email',
          email: '',
          mobile: '',
          password: '',
        }}
        validationSchema={signInSchema}
        onSubmit={signin}>
        {({ values }) => (
          <Form className='card px-8 md:mr-6 md:w-1/2 lg:w-2/5 flex flex-col dark:text-gray-300'>
            <label className='mb-1 font-semibold'>Login Using: </label>
            <div className='flex items-center justify-start gap-4 py-4'>
              <Radio name='loginType' value='email' onChange={onLoginTypeChange}>
                Email
              </Radio>
              <Radio name='loginType' value='mobile' onChange={onLoginTypeChange}>
                Mobile
              </Radio>
            </div>
            {values.loginType === 'email' ? (
              <TextInput type='email' name='email' id='email' label='Email'></TextInput>
            ) : (
              <TextInput type='tel' name='mobile' id='password' label='Mobile'></TextInput>
            )}
            <TextInput type='password' name='password' id='password' label='Password'></TextInput>
            <button
              type='submit'
              className='px-4 mt-4 mb-4 py-2 text-sm font-semibold rounded-md text-gray-200 bg-green-600 border-2 border-transparent uppercase tracking-wider hover:bg-transparent hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600'>
              sign in
            </button>
            {emailLoginError ? <p className='p-4 text-red-500'>{emailLoginError.message}</p> : ''}
            {mobileLoginError ? <p className='p-4 text-red-500'>{mobileLoginError.message}</p> : ''}
          </Form>
        )}
      </Formik>
    </div>
  )
}
