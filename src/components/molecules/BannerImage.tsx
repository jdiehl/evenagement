import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'

interface BannerImageProps {
  community: CommunityDocument
  event?: CommunityEventDocument
}

export default function BannerImage({ community, event }: BannerImageProps) {
  return (
    <div className="relative h-60">
      <img src={community.data().image} alt={community.data().name} className="w-full h-full object-cover" />
      {event && <img src={event.data().image} alt={event.data().title} className="w-44 h-44 absolute -bottom-6 left-4" />}
    </div>
  )
}
