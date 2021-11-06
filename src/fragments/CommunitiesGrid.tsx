import CommunityTile from '@src/components/CommunityTile'
import { CommunityDocument } from '@src/model/Community'
import Button from '@src/ui/Button'
import Container from '@src/ui/Container'
import Grid from '@src/ui/Grid'

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
