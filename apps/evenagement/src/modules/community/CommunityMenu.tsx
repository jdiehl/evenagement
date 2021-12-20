import { Container, SidebarHeader, SidebarItem } from 'ui'

import JoinCommunityButton from './JoinCommunityButton'
import { CommunityDocument } from './model/Community'

interface CommunityMenuProps {
  community: CommunityDocument
}

export default function CommunityMenu({ community }: CommunityMenuProps) {
return (
  <>
    <SidebarHeader>{community.data().name}</SidebarHeader>
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
