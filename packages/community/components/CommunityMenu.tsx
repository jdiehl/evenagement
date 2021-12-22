import { CommunityDocument } from 'types'
import { Container, SidebarHeader, SidebarItem } from 'ui'

import { JoinCommunityButton } from './JoinCommunityButton'

interface CommunityMenuProps {
  community: CommunityDocument
}

export function CommunityMenu({ community }: CommunityMenuProps) {
return (
  <>
    <SidebarHeader>{community.data()!.name}</SidebarHeader>
    <SidebarItem href={`/communities/${community.id}`}>Home</SidebarItem>
    <SidebarItem href={`/communities/${community.id}/events`}>Upcoming Events</SidebarItem>
    <SidebarItem href={`/communities/${community.id}/archive`}>Past Events</SidebarItem>
    <SidebarItem href={`/communities/${community.id}/members`}>Members</SidebarItem>
    <Container padding>
      <JoinCommunityButton community={community} />
    </Container>
  </>
  )
}
