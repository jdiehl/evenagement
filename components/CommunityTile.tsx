import { Data } from '../services/collections'

interface CommunityTileProps {
  community: Data.Community
}

// eslint-disable-next-line react/display-name, react/prop-types
export default function CommmunityTile({ community }: CommunityTileProps) {
  return (
    <div className="relative inline-block shadow-lg rounded-xl">
      <img src={community.image} alt={community.name} className="rounded-xl" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-b-xl px-4 py-2">
        <h2 className="text-2xl text-white font-medium truncate">{community.name || 'Unnamed Community'}</h2>
        <p className="text-gray-200 truncate">{community.description}</p>
      </div>
    </div>
  )
}
