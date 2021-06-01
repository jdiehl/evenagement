import { ChangeEventHandler, useEffect, useState } from 'react'
import { UseFormProps, UseFormReturn, useForm, useFormState, UseFormStateReturn, FieldPath } from 'react-hook-form'

import { storage } from '@src/lib/storage'
import { Document, DocumentRef, useDoc } from '@src/lib/store'

interface RegisterFileReturn {
  src?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

interface useDocFormReturn<T> extends UseFormReturn<T>, UseFormStateReturn<T> {
  registerFile: (name: FieldPath<T>) => RegisterFileReturn
  isReady: boolean
  doc: Document<T>
}

// default properties
const defaultProps: UseFormProps = {
  mode: 'onBlur'
}

export function useDocForm<T>(ref: DocumentRef<T>, props: UseFormProps<T> = {}): useDocFormReturn<T> {
  // load the document
  const doc = useDoc(ref)
  const [isReady, setIsReady] = useState(false)

  // get the return and state objects
  const res = useForm(Object.assign({}, defaultProps, props))
  const state = useFormState({ control: res.control })
  const { register, handleSubmit } = res

  // initialize default values after loading the document
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
      // handle file uploads
      for (const key of Object.keys(data)) {
        if (data[key] instanceof File) {
          const file: File = data[key]
          const typeParts = file.type.split('/')
          const storageRef = storage().child(`store/${doc.ref.path}/${key}.${typeParts[typeParts.length - 1]}`)
          await storageRef.put(file)
          data[key] = await storageRef.getDownloadURL()
        }
      }

      // update or create the document
      try {
        doc.exists ? await doc.ref.update(data) : await doc.ref.set(data as T)
      } catch (error) {
        res.setError(undefined, error)
        return
      }
      if (onSuccess) onSuccess(data as any)
    })
  }

  // add registerFile for handling file input
  const registerFile = (name: FieldPath<T>) => {
    const src: string | undefined = doc?.exists && doc.data()[name as string]
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      res.setValue(name, e.target.files[0] as any)
    }
    return { src, onChange } as RegisterFileReturn
  }

  return { registerFile, doc, isReady, ...res, ...state }
}
