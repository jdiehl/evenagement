import Grid from '@material-ui/core/Grid'
import CommunityCard from './CommunityCard'
import firebase from '../services/firebase'
import { Data } from '../services/collections'

export default function CommunityGrid({ communities }: { communities: firebase.firestore.QuerySnapshot<Data.Community> }) {
  return (
    <Grid container spacing={1}>
      {communities.docs.map(community => (
        <Grid key={community.id} item md={4} sm={6} xs={12}>
          <CommunityCard community={community.data()} />
        </Grid>
      ))}
    </Grid>
  )
}
