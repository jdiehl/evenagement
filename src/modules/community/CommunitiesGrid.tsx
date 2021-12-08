import Button from '@ui/Button'
import Container from '@ui/Container'
import Grid from '@ui/Grid'

import CommunityTile from './CommunityTile'
import { CommunityDocument } from './model/Community'

interface CommunitiesListProps {
  communities: CommunityDocument[]
}

export default function CommunitiesGrid({ communities }: CommunitiesListProps) {
  return (
    <Container gap padding>
      <Container row justify="end">
        <Button href="/communities/create">Create new...</Button>
      </Container>
      <Grid cols={3} gap>
        {communities.map(doc => (
          <CommunityTile key={doc.id} community={doc.data()} href={`/communities/${doc.id}`} />
        ))}
      </Grid>
    </Container>
  )
}
