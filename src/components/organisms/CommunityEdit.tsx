import { CloudArrowUp } from 'phosphor-react'
import { useEffect, useState } from 'react'

import useBinding from '../../lib/useBinding'
import { Data } from '../../services/collections'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

interface CommunityEditProps {
  doc: Data.Community,
  onSave: (doc: Data.Community, headerImage: File) => void
}

export default function CommunityEdit({ doc, onSave }: CommunityEditProps) {
  const [localDoc, docBinding] = useBinding(doc)
  const [headerImage, setHeaderImage] = useState(undefined)
  const [headerImageSrc, setHeaderImageSrc] = useState(doc.image)

  useEffect(() => {
    if (!headerImage) return
    const fr = new FileReader()
    fr.readAsDataURL(headerImage)
    fr.onload = (e) => {
      setHeaderImageSrc(e.target.result as string)
    }
  }, [headerImage])

  return (
    <form>
      <div className="flex justify-between pb-4">
        <Button type="outline">Cancel</Button>
        <Button onClick={() => onSave(localDoc, headerImage)}>Save</Button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <img
            className="w-full object-cover h-80"
            src={headerImageSrc}
          />
          <Button floating className="absolute right-4 -bottom-4" tag="file-input" onChange={(e) => setHeaderImage(e.target.files[0])}>
            <CloudArrowUp />
          </Button>
        </div>
        <Input label="Community Name" {...docBinding('name')}/>
        <Input type="textarea" rows={6} label="Description" {...docBinding('description')} />
      </div>
    </form>
  )
}
