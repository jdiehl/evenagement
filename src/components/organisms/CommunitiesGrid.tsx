import Button from '@src/components/atoms/Button'
import Container from '@src/components/atoms/Container'
import Grid from '@src/components/atoms/Grid'
import CommunityTile from '@src/components/molecules/CommunityTile'
import { CommunityDocument } from '@src/model/Community'

interface CommunitiesListProps {
  communities: CommunityDocument[]
}

export default function CommunitiesGrid({ communities }: CommunitiesListProps) {
  return (
    <Container padding={true}>
      <Container direction="row" justify="end">
        <Button href="/communities/create">Create new...</Button>
      </Container>
      <Grid cols={3}>
        {communities.map(doc => (
          <CommunityTile key={doc.id} community={doc.data()} href={`/communities/${doc.id}`} />
        ))}
      </Grid>
    </Container>
  )
}
