import { useFormik } from 'formik'
import Link from 'next/link'

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
      sex: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className='md:flex items-center justify-center'>
      <div className='md:flex-grow'>
        <h2 className='text-center font-semibold mb-8 dark:text-gray-200'>
          Create your account for a personalized experience
        </h2>
        <p className='text-center font-light dark:text-gray-200'>
          Already Registered ?
          <Link href='/signin'>
            <a className='text-green-700 font-normal dark:text-green-400 ml-2'>Sign In</a>
          </Link>
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className='card px-8 md:w-1/2 lg:w-2/5 flex flex-col dark:text-gray-300'>
        <div className='input-container'>
          <label htmlFor='password' className='mb-1 md:w-1/3 font-semibold'>
            First name
          </label>
          <input
            id='firstname'
            name='firstname'
            type='text'
            placeholder='First Name'
            {...formik.getFieldProps('firstName')}
            className='input-field'
          />
          {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        </div>
        <div className='input-container'>
          <label htmlFor='password' className='mb-1 md:w-1/3 font-semibold'>
            Middle Name
          </label>
          <input
            id='middlename'
            name='middlename'
            type='text'
            placeholder='Middle Name'
            {...formik.getFieldProps('middleName')}
            className='input-field'
          />
          {formik.touched.middleName && formik.errors.middleName ? <div>{formik.errors.middleName}</div> : null}
        </div>
        <div className='input-container'>
          <label htmlFor='password' className='mb-1 md:w-1/3 font-semibold'>
            last Name
          </label>
          <input
            id='lastname'
            name='lastname'
            type='text'
            placeholder='Last Name'
            {...formik.getFieldProps('lastName')}
            className='input-field'
          />
          {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        </div>
        <div className='input-container'>
          <label htmlFor='password' className='mb-1 md:w-1/3 font-semibold'>
            Sex
          </label>
          <select name='sex' id='sex' {...formik.getFieldProps('sex')} placeholder='Sex' className='input-field'>
            <option value='select'>Select sex</option>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='others'>Others</option>
          </select>

          {formik.touched.mobile && formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
        </div>
        <div className='input-container'>
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
          className='px-4 mt-4 mb-4 py-2 text-sm font-semibold rounded-md text-gray-50 bg-green-700 dark:bg-green-500 border-2 border-transparent uppercase tracking-wider hover:bg-transparent hover:text-green-600 dark:hover:text-green-400 hover:border-green-600 dark:hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600'>
          sign up
        </button>
      </form>
    </div>
  )
}
