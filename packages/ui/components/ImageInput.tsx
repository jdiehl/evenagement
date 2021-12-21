import Image from 'next/image'
import { CloudArrowUp, Image as ImageIcon } from 'phosphor-react'
import { ChangeEventHandler, useEffect, useState } from 'react'

import { Button } from './Button'
import { Loading } from './Loading'

interface ImageInputProps {
  label?: string
  src?: string
  className?: string
  height: number
  onChange: ChangeEventHandler<HTMLInputElement>
}

function makeImageView(loading: boolean, src?: string) {
  if (loading) return <Loading className="absolute h-full w-full text-gray-light" />
  if (!src) return <ImageIcon className="absolute h-full w-full text-gray-light" />
  return <Image src={src} alt="Preview" className="absolute h-full w-full object-cover" />
}

export function ImageInput({ label, src: _src, height, className, onChange }: ImageInputProps) {
  const [src, setSrc] = useState<string | undefined>(_src)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setSrc(_src)
  }, [_src])

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoading(true)
    onChange(e)
    const fileReader = new FileReader()
    fileReader.readAsDataURL(e.target.files![0])
    fileReader.onload = (e) => {
      setSrc(e.target!.result as string)
      setLoading(false)
    }
  }

  className = 'relative cursor-pointer ' + (className || '')
  const style = { height }

  return (
    <label className="block text-sm font-bold">
      {label && <div className="ml-1 mb-1">{label}</div>}
      <div style={style} className={className}>
        {makeImageView(loading, src)}
        <Button className="absolute right-2 -bottom-3" round>
          <CloudArrowUp />
        </Button>
      </div>
      <input className="hidden" type="file" onChange={onInputChange} />
    </label>
  )
}
