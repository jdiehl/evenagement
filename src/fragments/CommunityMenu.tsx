import Button from '@src/components/Button'
import Container from '@src/components/Container'
import Text from '@src/components/Text'
import JoinCommunityButton from '@src/fragments/JoinCommunityButton'
import { CommunityDocument } from '@src/model/Community'

interface CommunityMenuProps {
  community: CommunityDocument
}

export default function CommunityMenu({ community }: CommunityMenuProps) {
return (
  <Container>
    <Text type="h2">{community.data().name}</Text>
    <Button type="underline" href={`/communities/${community.id}`}>Home</Button>
    <Button type="underline" href={`/communities/${community.id}`}>Upcoming Events</Button>
    <Button type="underline" href={`/communities/${community.id}`}>Past Events</Button>
    <Button type="underline" href={`/communities/${community.id}`}>Members</Button>
    <JoinCommunityButton community={community} />
  </Container>
  )
}
