import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

export default function useBinding<T>(val: T): [T, <K extends keyof T>(prop: K) => { onChange: (ev: ChangeEvent<any>) => void, value: T[K] }, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(val)
  const binding = <K extends keyof T>(prop: K) => ({
    onChange: (ev: ChangeEvent<any>) => setValue({ ...value, [prop]: ev.target.value }),
    value: value[prop]
  })
  return [value, binding, setValue]
}
