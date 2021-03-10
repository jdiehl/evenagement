import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import EditIcon from '@material-ui/icons/Edit'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import CommunityCard from '../../../components/CommunityCard'
import Loading from '../../../components/Loading'
import Main from '../../../components/Main'
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
      <Grid container spacing={1}>
        <Link href="/communities">
          <Button startIcon={<ArrowBackIcon />}>Back to Communities</Button>
        </Link>
        <Button startIcon={<EditIcon />} onClick={toggleEditMode}>Edit</Button>
      </Grid>
      {community ? <CommunityCard community={community.data()}/> : <Loading/>}
    </Main>
  )
}
