import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

type OnChangeHelper<T> = (prop: keyof T) => (ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void

export default function useStateWithFormHelper<T>(val: T): [T, Dispatch<SetStateAction<T>>, OnChangeHelper<T>] {
  const state = useState(val)
  const onChange = (prop: keyof T) => (ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => state[1]({ ...state[0], [prop]: ev.target.value })
  return [...state, onChange]
}
