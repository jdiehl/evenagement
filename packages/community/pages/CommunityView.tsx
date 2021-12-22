import { useEvents } from 'event'
import { Loading } from 'ui'
import { useCommunityMemberProfiles } from 'user'

import { CommunityDetails } from '../components'
import { useCommunity } from '../model'

interface CommunityViewProps {
  id: string
}

export function CommunityView({ id }: CommunityViewProps) {
  const community = useCommunity(id)
  const events = useEvents(id)
  const members = useCommunityMemberProfiles(id)

  if (!community) return <Loading />
  return (
    <CommunityDetails community={community} events={events!} members={members!} />
  )
}
