import { DocumentReference, DocumentSnapshot, onSnapshot, updateDoc, setDoc as set, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref as getRef, uploadBytes } from 'firebase/storage'
import { getStorage } from 'firebase/storage'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { UseFormProps, UseFormReturn, useForm, useFormState, UseFormStateReturn, FieldPath, get } from 'react-hook-form'

function convertTimestampsToDate(data: Record<string, any>) {
  if (!data) return data
  for (const key of Object.keys(data)) {
    if (data[key] instanceof Timestamp) {
      data[key] = data[key].toDate()
    }
  }
  return data
}

interface RegisterFileReturn {
  src?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}
interface RegisterDatePickerReturn {
  value?: Date
  onChange: (date: Date) => void
}

interface useDocFormReturn<T> extends UseFormReturn<T>, UseFormStateReturn<T> {
  registerDatePicker: (path: FieldPath<T>) => RegisterDatePickerReturn
  registerFile: (path: FieldPath<T>) => RegisterFileReturn
  doc: DocumentSnapshot<T>
  isReady: boolean
}

// default properties
const defaultProps: UseFormProps = {
  mode: 'onBlur'
}

export function useDocForm<T>(ref: DocumentReference<T>, props: UseFormProps<T> = {}): useDocFormReturn<T> {
  const [doc, setDoc] = useState<DocumentSnapshot<T> | null>(null)
  const [isReady, setIsReady] = useState(false)

  // load the document
  useEffect(() => onSnapshot(ref, snapshot => setDoc(snapshot)), [ref.id])

  // get the return and state objects
  const res = useForm(Object.assign({}, defaultProps, props) as any)
  const state = useFormState({ control: res.control })
  const { register, handleSubmit } = res

  // initialize default values after loading the document
  useEffect(() => {
    if (doc?.exists) {
      res.reset(convertTimestampsToDate(doc.data() as Record<string, any>) as any)
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
          const storageRef = getRef(getStorage(), `store/${ref.path}/${key}.${typeParts[typeParts.length - 1]}`)
          await uploadBytes(storageRef, file)
          data[key] = await getDownloadURL(storageRef)
        }
      }

      // update or create the document
      try {
        doc?.exists ? await updateDoc(doc.ref, data) : await set(ref, data as any)
      } catch (error) {
        res.setError(undefined as any, error as any)
        return
      }
      if (onSuccess) onSuccess(data as any)
    })
  }

  // add registerFile for handling file input
  const registerFile = (name: FieldPath<T>) => {
    const src: string | undefined = doc?.exists && get(doc.data(), name)
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      res.setValue(name, e.target.files![0] as any)
    }
    return { src, onChange } as RegisterFileReturn
  }

  // add registerDatePicker for handling Date input
  const registerDatePicker = (name: FieldPath<T>) => {
    const value = (res.watch(name) as Date)
    const onChange = (date: Date) => {
      res.setValue(name, date as any)
    }
    return { value, onChange } as RegisterDatePickerReturn
  }

  return { registerDatePicker, registerFile, doc, isReady, ...res, ...state } as any
}
