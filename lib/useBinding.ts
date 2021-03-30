import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

// type OnChangeHelper<T> = (prop: keyof T) => (ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void

type Binding<T> = (prop: keyof T) => { onChange: (ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void, value: T[typeof prop] }

export default function useBinding<T>(val: T): [T, Binding<T>, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(val)
  const onChange = (prop: keyof T) => (ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setValue({ ...value, [prop]: ev.target.value })
  const binding = (prop: keyof T) => ({
    onChange: onChange(prop),
    value: value[prop]
  })
  return [value, binding, setValue]
}
