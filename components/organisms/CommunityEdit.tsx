import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons/faCloudUploadAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useBinding from '../../lib/useBinding'
import { Data } from '../../services/collections'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

interface CommunityEditProps {
  doc: Data.Community,
  onSave: (doc: Data.Community) => void
}

export default function CommunityEdit({ doc, onSave }: CommunityEditProps) {
  const [localDoc, docBinding] = useBinding(doc)

  return (
    <form>
      <div className="flex justify-between pb-4">
        <Button type="outline">Cancel</Button>
        <Button onClick={() => onSave(localDoc)}>Save</Button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <img
            className="w-full object-cover h-80"
            src={doc.image}
          />
          <Button floating className="absolute right-4 -bottom-4">
            <FontAwesomeIcon icon={faCloudUploadAlt}/>
          </Button>
        </div>
        <Input label="Community Name" {...docBinding('name')}/>
        <Input type="textarea" rows={6} label="Description" {...docBinding('description')} />
      </div>
    </form>
  )
}
