import JoinCommunityButton from '@src/fragments/JoinCommunityButton'
import { CommunityDocument } from '@src/model/Community'
import Container from '@src/ui/Container'
import SidebarHeader from '@src/ui/SidebarHeader'
import SidebarItem from '@src/ui/SidebarItem'

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
