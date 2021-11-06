import CommunityDetails from '@src/fragments/CommunityDetails'
import { useCommunity } from '@src/model/Community'
import { useEvents } from '@src/model/CommunityEvent'
import { useCommunityMemberProfiles } from '@src/model/UserProfile'
import Loading from '@src/ui/Loading'

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
