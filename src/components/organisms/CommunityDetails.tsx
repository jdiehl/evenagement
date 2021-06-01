import Button from '@src/components/atoms/Button'
import SubmenuLayout from '@src/components/atoms/SubmenuLayout'
import CommunityDetailContent from '@src/components/molecules/CommunityDetailContent'
import { Community, Document } from '@src/lib/store'

interface CommunityDetailsProps {
  community: Document<Community>
}

export default function CommunityDetails({ community }: CommunityDetailsProps) {
  const communityData = community.data()
  const menuContent = (<>
    <p className="font-bold text-xl">{communityData.name}</p>
    <p><a className="underline" href="#">Home</a></p>
    <p><a className="underline" href="#">Upcoming Events</a></p>
    <p><a className="underline" href="#">Past Events</a></p>
    <p><a className="underline" href="#">Members</a></p>
    <Button className="w-full h-12 py-3 mt-4">Join Community</Button>
  </>)

  return (<div className="flex flex-col flex-grow max-w-full">
    <img src={communityData.image} alt={communityData.name} className="w-full h-60 object-cover" />

    <SubmenuLayout menuContent={menuContent}>
      <CommunityDetailContent community={community} />
    </SubmenuLayout>
  </div>
  )
}
