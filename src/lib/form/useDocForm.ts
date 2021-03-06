import { ChangeEventHandler, useEffect, useState } from 'react'
import { UseFormProps, UseFormReturn, useForm, useFormState, UseFormStateReturn, FieldPath, get } from 'react-hook-form'

import { DocumentReference, DocumentSnapshot, storage } from '@src/lib/firebase'

interface RegisterFileReturn {
  src?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

interface useDocFormReturn<T> extends UseFormReturn<T>, UseFormStateReturn<T> {
  registerFile: (name: FieldPath<T>) => RegisterFileReturn
  isReady: boolean
  doc: DocumentSnapshot<T>
}

// default properties
const defaultProps: UseFormProps = {
  mode: 'onBlur'
}

export function useDocForm<T>(ref: DocumentReference<T>, props: UseFormProps<T> = {}): useDocFormReturn<T> {
  const [doc, setDoc] = useState<DocumentSnapshot<T>>(null)
  const [isReady, setIsReady] = useState(false)

  // load the document
  useEffect(() => ref.onSnapshot(snapshot => setDoc(snapshot)), [ref.id])

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
          const storageRef = storage().ref().child(`store/${doc.ref.path}/${key}.${typeParts[typeParts.length - 1]}`)
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
    const src: string | undefined = doc?.exists && get(doc.data(), name)
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      res.setValue(name, e.target.files[0] as any)
    }
    return { src, onChange } as RegisterFileReturn
  }

  return { registerFile, doc, isReady, ...res, ...state }
}
