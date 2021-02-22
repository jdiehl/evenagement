import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import { collection } from '../../services/firebase'
import { Data } from '../../services/collections'
import Main from '../../components/Main'
import CommunityCard from '../../components/CommunityCard'
import Loading from '../../components/Loading'
import Grid from '@material-ui/core/Grid'

export default function Communities() {
  const router = useRouter()
  const id = router.query.id as string
  const [community, setCommunity] = useState(null)

  useEffect(() => {
    const ref = collection<Data.Community>('communities').doc(id)
    const unsub = ref.onSnapshot(doc => setCommunity(doc))
    return () => unsub()
  })

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
