import { Document } from '@src/lib/store'
import { UseFormProps, UseFormReturn, useForm, useFormState, UseFormStateReturn } from 'react-hook-form'

interface UseUpdateFormReturn<T> extends UseFormReturn<T>, UseFormStateReturn<T> {}

export function useUpdateForm<T>(doc: Document<T>, props: UseFormProps<T> = {}): UseUpdateFormReturn<T> {
  // default properties
  const defaultProps: UseFormProps<T> = {
    defaultValues: doc?.data() as any,
    mode: 'onBlur'
  }

  // get the return and state objects
  const res = useForm(Object.assign({}, defaultProps, props))
  const state = useFormState({ control: res.control })
  const { register, handleSubmit } = res

  // override register to also return error object
  res.register = (name, options?) => {
    const error = (state.errors as any)[name]?.message
    return { error, ...register(name, options) } as any
  }

  // override submit handler to update the document
  res.handleSubmit = (onSuccess) => {
    return handleSubmit(async (data) => {
      try {
        await doc.ref.update(data)
      } catch (error) {
        res.setError(undefined, error)
        return
      }
      if (onSuccess) onSuccess(data as any)
    })
  }
  return { ...res, ...state }
}
