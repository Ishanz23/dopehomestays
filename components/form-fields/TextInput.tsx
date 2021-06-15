import { useField } from 'formik'

export default function TextInput({ label, ...props }: { type: string; label: string; name: string; id: string }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <div className='flex items-center justify-between py-2 pr-2'>
        <label htmlFor={props.id || props.name} className='font-semibold'>
          {label}
        </label>
        <div className='text-red-500 dark:text-red-400 flex items-center'>{meta.touched && meta.error}</div>
      </div>
      <input className='input-field' {...field} {...props} />
    </>
  )
}
