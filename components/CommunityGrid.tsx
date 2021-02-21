import Grid from '@material-ui/core/Grid'
import CommunityCard from './CommunityCard'
import { Data } from '../services/collections'

export default function CommunityGrid() {
  const communities: Data.Community[] = [
    { name: 'Aachen Usability', description: 'Lorem ipsum', image: '' },
    { name: 'Fotoclub', description: 'Lorem ipsum', image: '' },
    { name: 'Wandergruppe', description: 'Lorem ipsum', image: '' },
    { name: 'Coders ohne Grenze', description: 'Lorem ipsum', image: '' }
  ]
  return (
    <Grid container spacing={1}>
      {communities.map((community, i) => (
        <Grid key={i} item md={4} sm={6} xs={12}>
          <CommunityCard community={community} />
        </Grid>
      ))}
    </Grid>
  )
}
