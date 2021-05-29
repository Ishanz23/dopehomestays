import { useField } from 'formik'

export default function TextInput({ label, ...props }: { type: string; label: string; name: string; id: string }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name} className='mb-1 font-semibold'>
        {label}
      </label>
      <input className='input-field' {...field} {...props} />
      <div className='text-red-500 dark:text-red-400 h-12 flex items-center'>{meta.touched && meta.error}</div>
    </>
  )
}
