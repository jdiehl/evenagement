import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import { useDoc } from '../../services/firestore'
import { Data } from '../../services/collections'
import Main from '../../components/Main'
import CommunityCard from '../../components/CommunityCard'
import Loading from '../../components/Loading'
import Grid from '@material-ui/core/Grid'

export default function Communities() {
  // require the router to be ready
  const router = useRouter()
  const id = router.query.id as string

  // subscribe to the community document
  const community = useDoc<Data.Community>('communities', id)

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
