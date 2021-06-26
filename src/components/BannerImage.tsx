interface BannerPresentable {
  name?: string
  image?: string
}

interface BannerImageProps {
  community: BannerPresentable
  event?: BannerPresentable
}

export default function BannerImage({ community, event }: BannerImageProps) {
  return (
    <div className="relative h-60">
      <img src={community.image} alt={community.name ?? 'Unnamed community'} className="w-full h-full object-cover" />
      {event && <img src={event.image} alt={event.name ?? 'Unnamed event'} className="w-44 h-44 absolute -bottom-6 left-4" />}
    </div>
  )
}
