import Loading from 'ui/Loading'

import { useEvents } from '@event/model/CommunityEvent'
import { useCommunityMemberProfiles } from '@user/model/UserProfile'

import CommunityDetails from '../CommunityDetails'
import { useCommunity } from '../model/Community'

interface CommunityViewProps {
  id: string
}

export default function CommunityView({ id }: CommunityViewProps) {
  const community = useCommunity(id)
  const events = useEvents(id)
  const members = useCommunityMemberProfiles(id)

  if (!community) return <Loading />
  return (
    <CommunityDetails community={community} events={events} members={members} />
  )
}
