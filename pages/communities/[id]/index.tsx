import { faArrowLeft, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Button from '../../../components/atoms/Button'
import Loading from '../../../components/atoms/Loading'
import CommunityTile from '../../../components/molecules/CommunityTile'
import Main from '../../../components/organisms/Main'
import { Entities } from '../../../services/collections'
import { useDoc } from '../../../services/firestore'

export default function Communities() {
  // require the router to be ready
  const router = useRouter()
  const id = router.query.id as string

  // subscribe to the community document
  const community = useDoc(Entities.Community, id)

  // edit mode state
  const [editMode, setEditMode] = useState(false)
  const toggleEditMode = () => setEditMode(!editMode)

  return (
    <Main>
      <div className="flex flex-row">
        <Link href="/communities">
          <Button><FontAwesomeIcon icon={faArrowLeft} /> Back to Communities</Button>
        </Link>
        <Button onClick={toggleEditMode}><FontAwesomeIcon icon={faEdit} /> Edit</Button>
      </div>
      {community ? <CommunityTile community={community.data()}/> : <Loading/>}
    </Main>
  )
}
