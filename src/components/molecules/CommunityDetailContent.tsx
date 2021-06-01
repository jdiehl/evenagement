import firebase from 'firebase/app'
import { NotePencil, PlusCircle } from 'phosphor-react'

import Button from '@src/components/atoms/Button'
import HorizontalList from '@src/components/atoms/HorizontalList'
import Loading from '@src/components/atoms/Loading'
import Text from '@src/components/atoms/Text'
import Tile from '@src/components/atoms/Tile'
import EventTile from '@src/components/molecules/EventTile'
import UserTile from '@src/components/molecules/UserTile'
import { Document, useQuery, Community, CommunityEvent, CommunityMember, collections } from '@src/lib/store'

interface CommunityDetailContentProps {
  community: Document<Community>
}

export default function CommunityDetailContent({ community }: CommunityDetailContentProps) {
  const communityData = community.data()

  const eventsQuery = useQuery<CommunityEvent>(community.ref.collection('events') as any)
  const events = eventsQuery?.docs

  const membersQuery = useQuery<CommunityMember>(community.ref.collection('members') as any)
  const members = membersQuery?.docs.map(m => m.id)

  const memberProfilesQuery = useQuery(members && collections.userProfile().where(firebase.firestore.FieldPath.documentId(), 'in', members), members)
  const memberProfiles = memberProfilesQuery?.docs

  const eventTiles = events?.map((event) =>
    <EventTile href={`/communities/${community.id}/${event.id}`} key={event.id} event={event.data()} />
  )

  if (eventTiles?.length === 0) {
    eventTiles.push(
      <Tile key={1} size={44} className="flex items-center justify-center text-2xl text-gray flex-col border-gray-line border">
        <PlusCircle />
        Add Event
      </Tile>
    )
  }

  return (
    <div className="relative">
      <Text type="h1">{communityData.name}</Text>
      <Button round={true} href={`/communities/${community.id}/edit`} className="absolute right-0 top-0">
        <NotePencil/>
      </Button>
      <Text>{communityData.description}</Text>
      <div className="mt-8">
        <Text type="h2">Events</Text>
        <HorizontalList className="h-48">
          {events
            ? eventTiles
            : <Loading />}
        </HorizontalList>
      </div>
      <div className="mt-8">
        <Text type="h2">Members</Text>
        <HorizontalList className="h-28">
          {memberProfiles?.map((memberProfile) => <UserTile userProfile={memberProfile.data()} key={memberProfile.id} />)}
        </HorizontalList>
      </div>
    </div>
  )
}
