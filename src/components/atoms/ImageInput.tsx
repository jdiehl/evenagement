import { CloudArrowUp } from 'phosphor-react'
import { ChangeEventHandler, useEffect, useState } from 'react'

import { Button } from './Button.stories'

interface ImageInputProps {
  label?: string
  src?: string
  className?: string
  height: number
  onChange: ChangeEventHandler<{ value: File }>
}

export default function ImageInput({ label, src: _src, height, className, onChange }: ImageInputProps) {
  const [src, setSrc] = useState(_src)
  const [value, setValue] = useState<File>()

  useEffect(() => {
    if (!value) return
    onChange({ target: { value } } as any)
    const fileReader = new FileReader()
    fileReader.readAsDataURL(value)
    fileReader.onload = (e) => setSrc(e.target.result as string)
    return () => fileReader.abort()
  }, [value])

  className = 'relative  cursor-pointer ' + (className || '')
  const style = { height }

  return (
    <label className="block text-sm font-bold">
      {label && <div className="ml-1 mb-1">{label}</div>}
      <div style={style} className={className}>
        <img className="absolute h-full w-full object-cover" src={src} />
        <Button className="absolute right-2 -bottom-3" round={true}>
          <CloudArrowUp />
        </Button>
      </div>
      <input className="hidden" type="file" onChange={(e) => setValue(e.target.files[0])} />
    </label>
  )
}
