import { CoverImage } from './CoverImage'

interface BannerPresentable {
  name?: string
  image?: string
}

interface BannerImageProps {
  community: BannerPresentable
  event?: BannerPresentable
}

export function BannerImage({ community, event }: BannerImageProps) {
  return (
    <div className="relative h-60">
      <CoverImage src={community.image} alt={community.name ?? 'Unnamed community'} />
      {event && <div className="w-44 h-44 absolute -bottom-6 left-4">
        <CoverImage src={event.image} alt={event.name ?? 'Unnamed event'} />
      </div>}
    </div>
  )
}
