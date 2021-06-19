import Link from 'next/link'

import { Community } from '@src/model/Community'

interface CommunityTileProps {
  community: Community
  href?: string
}

// eslint-disable-next-line react/display-name, react/prop-types
export default function CommmunityTile({ community, href }: CommunityTileProps) {
  const tile = (
    <a className="relative inline-block overflow-hidden shadow-lg h-64">
      <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2">
        <h2 className="text-2xl text-white font-medium truncate">{community.name || 'Unnamed Community'}</h2>
        <p className="text-gray-light truncate">{community.description}</p>
      </div>
    </a>
  )
  if (href) {
    return <Link href={href}>{tile}</Link>
  }
}
