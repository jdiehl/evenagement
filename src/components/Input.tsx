import { ChangeEventHandler, MouseEventHandler, ForwardedRef, forwardRef } from 'react'

type InputType = 'text' | 'email' | 'password' | 'textarea'

interface InputProps {
  type?: InputType
  label?: string
  placeholder?: string
  value?: string
  minLength?: number
  className?: string
  rows?: number
  name?: string
  error?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
}

function elementForType(type: InputType, props: any, ref: ForwardedRef<unknown>) {
  switch (type) {
    case 'textarea': return <textarea ref={ref} {...props} />
    default: return <input ref={ref} type={type} {...props} />
  }
}

export default forwardRef(function Input({ type, label, error, ...props }: InputProps, ref) {
  props.className = 'shadow appearance-none border rounded w-full py-2 px-3' + (props.className ? ` ${props.className}` : '')
  if (error) props.className += ' border-error'

  const element = elementForType(type, props, ref)
  return (
    <label className="block text-sm font-bold">
      {label && <div className="ml-1 mb-1">{label}</div>}
      {element}
      <div className="h-4 ml-1 mt-1 text-error">{error ?? ''}</div>
    </label>
  )
})
