import { ChangeEventHandler } from 'react'

type InputType = 'text' | 'email' | 'password' | 'textarea'

interface InputProps {
  type?: InputType
  label?: string
  placeholder?: string
  value?: string
  minLength?: number
  className?: string
  rows?: number
  onChange: ChangeEventHandler<HTMLInputElement>
}

function elementForType(type: InputType, props: any) {
  switch (type) {
    case 'textarea': return <textarea {...props} />
    default: return <input type={type} {...props} />
  }
}

export default function Input({ type, label, ...props }: InputProps) {
  props.className = 'shadow appearance-none border rounded w-full py-2 px-3' + (props.className ? ` ${props.className}` : '')

  const element = elementForType(type, props)
  return (
    <label className="block text-sm font-bold">
      {label && <div className="ml-1 mb-1">{label}</div>}
      {element}
    </label>
  )
}
