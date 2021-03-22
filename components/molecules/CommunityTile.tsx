import { Data } from '../../services/collections'

interface CommunityTileProps {
  community: Data.Community
}

// eslint-disable-next-line react/display-name, react/prop-types
export default function CommmunityTile({ community }: CommunityTileProps) {
  return (
    <div className="relative inline-block overflow-hidden shadow-lg rounded-xl h-64">
      <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2">
        <h2 className="text-2xl text-white font-medium truncate">{community.name || 'Unnamed Community'}</h2>
        <p className="text-gray-light truncate">{community.description}</p>
      </div>
    </div>
  )
}
