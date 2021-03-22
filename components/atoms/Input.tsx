import { ChangeEventHandler } from 'react'

interface InputProps {
  type?: 'text' | 'email' | 'password'
  label?: string
  placeholder?: string
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ type, label, placeholder, value, onChange }: InputProps) {
  return (
    <label className="block text-sm font-bold">
      {label && <div className="ml-1 mb-1">{label}</div>}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3"
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </label>
  )
}
