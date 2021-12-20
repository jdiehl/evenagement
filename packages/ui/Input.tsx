import { ChangeEventHandler, MouseEventHandler, ForwardedRef, forwardRef } from 'react'

type InputType = 'text' | 'email' | 'password' | 'textarea' | 'checkbox'

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

function elementForType(type: InputType | undefined, props: any, ref: ForwardedRef<unknown>) {
  switch (type) {
    case 'textarea': return <textarea ref={ref} {...props} />
    default: return <input ref={ref} type={type} {...props} />
  }
}

export const Input = forwardRef(function Input({ type, label, error, ...props }: InputProps, ref) {
  props.className = 'shadow border border-gray-line rounded' + (props.className ? ` ${props.className}` : '')
  if (type !== 'checkbox') props.className += ' appearance-none w-full py-2 px-3'
  if (type === 'checkbox') props.className += ' w-6 h-6 cursor-pointer'
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
