import { NotePencil } from 'phosphor-react'

import AddTile from '@src/components/AddTile'
import Button from '@src/components/Button'
import Container from '@src/components/Container'
import EventTile from '@src/components/EventTile'
import HorizontalList from '@src/components/HorizontalList'
import Loading from '@src/components/Loading'
import Text from '@src/components/Text'
import UserTile from '@src/components/UserTile'
import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'
import { UserProfileDocument } from '@src/model/UserProfile'

interface CommunityDetailContentProps {
  community: CommunityDocument
  events: CommunityEventDocument[]
  members: UserProfileDocument[]
}

export default function CommunityDetailContent({ community, events, members }: CommunityDetailContentProps) {
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
