import { useField } from 'formik'

export default function Radio({ children, onChange: customOnChange, ...props }: { children: any; name: string; value: string; onChange? }) {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [{onChange: defaultOnChange, ...field}, meta] = useField({ type: 'radio', ...props })
  const onChange = (e) => { defaultOnChange(e); customOnChange(props.value); }

  return (
    <div className='flex items-center'>
      <input type='radio' {...field} {...props} onChange={onChange} />
      <label className='ml-2 font-semibold'>{children}</label>
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  )
}
