import TextField from '@material-ui/core/TextField'
import { CloudUpload } from '@material-ui/icons'

import { Data } from '../services/collections'
import useStateWithFormHelper from '../services/formUtils'

import Button from './atoms/Button'

interface CommunityEditProps {
  doc: Data.Community,
  onSave?: (doc: Data.Community) => void
}

export default function CommunityEdit({ doc, onSave }: CommunityEditProps) {
  const [localDoc, , onChange] = useStateWithFormHelper(doc)

  return (
    <form>
      <div className="flex justify-between pb-4">
        <Button type="outline">Cancel</Button>
        <Button onClick={() => onSave(localDoc)}>Save</Button>
      </div>
      <div className="flex flex-col">
        <div className="relative">
          <img
            className="w-full object-cover h-80"
            src="https://images.pexels.com/photos/401107/pexels-photo-401107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Button floating className="absolute right-4 -bottom-4">
            <CloudUpload />
          </Button>
        </div>
        <TextField id="name" label="Community Name" value={localDoc.name} onChange={onChange('name')}/>
        <TextField multiline rows={6} id="description" label="Description" value={localDoc.description} onChange={onChange('description')}/>
      </div>
    </form>
  )
}
