import { Document, DocumentRef, useDoc } from '@src/lib/store'
import { useEffect, useState } from 'react'
import { UseFormProps, UseFormReturn, useForm, useFormState, UseFormStateReturn } from 'react-hook-form'

interface UseUpdateFormReturn<T> extends UseFormReturn<T>, UseFormStateReturn<T> {
  doc: Document<T>
  isReady: boolean
}

// default properties
const defaultProps: UseFormProps = {
  mode: 'onBlur'
}

export function useUpdateForm<T>(ref: DocumentRef<T>, props: UseFormProps<T> = {}): UseUpdateFormReturn<T> {
  // load the document
  const doc = useDoc(ref)
  const [isReady, setIsReady] = useState(false)

  // get the return and state objects
  const res = useForm(Object.assign({}, defaultProps, props))
  const state = useFormState({ control: res.control })
  const { register, handleSubmit } = res

  useEffect(() => {
    if (doc?.exists) {
      res.reset(doc.data() as any)
    }
    setIsReady(!!doc)
  }, [doc])

  // override register to also return error object
  res.register = (name, options?) => {
    const error = (state.errors as any)[name]?.message
    return { error, ...register(name, options) } as any
  }

  // override submit handler to update the document
  res.handleSubmit = (onSuccess) => {
    return handleSubmit(async (data) => {
      try {
        doc.exists ? await doc.ref.update(data) : await doc.ref.set(data as T)
      } catch (error) {
        res.setError(undefined, error)
        return
      }
      if (onSuccess) onSuccess(data as any)
    })
  }
  return { doc, isReady, ...res, ...state }
}
