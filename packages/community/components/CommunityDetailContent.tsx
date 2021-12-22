import { AddTile, EventTile } from 'event'
import { NotePencil } from 'phosphor-react'
import { CommunityDocument, CommunityEventDocument } from 'types'
import { UserProfileDocument } from 'types'
import { Button, Container, HorizontalList, Loading, Text } from 'ui'
import { UserTile } from 'user'

interface CommunityDetailContentProps {
  community: CommunityDocument
  events: CommunityEventDocument[]
  members: UserProfileDocument[]
}

export function CommunityDetailContent({ community, events, members }: CommunityDetailContentProps) {
  const eventTiles = events?.map((event) =>
    <EventTile href={`/communities/${community.id}/events/${event.id}`} key={event.id} event={event.data()} />
  )

  eventTiles?.push(
    <AddTile key={eventTiles.length} label="Add Event" />
  )

  return (
    <Container gap>
      <Container row align="start">
        <Text type="h1" margin={0}>{community.data().name}</Text>
        <Container grow />
        <Button href={`/communities/${community.id}/edit`} round>
          <NotePencil/>
        </Button>
      </Container>
      <Text>{community.data().description}</Text>
      <Text type="h2">Events</Text>
      <HorizontalList>
        {events
          ? eventTiles
          : <Loading />}
      </HorizontalList>
      <Text type="h2">Members</Text>
      <HorizontalList>
        {members?.map((memberProfile) => <UserTile userProfile={memberProfile.data()} key={memberProfile.id} />)}
      </HorizontalList>
    </Container>
  )
}
