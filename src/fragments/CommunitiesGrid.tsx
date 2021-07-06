import Button from '@src/components/Button'
import CommunityTile from '@src/components/CommunityTile'
import Container from '@src/components/Container'
import Grid from '@src/components/Grid'
import { CommunityDocument } from '@src/model/Community'

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
