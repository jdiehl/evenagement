import Link from 'next/link'
import { CoverImage, Text, Tile, TileBar } from 'ui'

import { Community } from './model/Community'

interface CommunityTileProps {
  community: Community
  href?: string
}

// eslint-disable-next-line react/display-name, react/prop-types
export default function CommmunityTile({ community, href }: CommunityTileProps) {
  const tile = (
    <Tile href={href} height={64}>
      <CoverImage src={community.image} alt={community.name} />
      <TileBar>
        <Text size="xl">{community.name || 'Unnamed Community'}</Text>
        <Text size="m">{community.description}</Text>
      </TileBar>
    </Tile>
  )
  if (href) {
    return <Link href={href}>{tile}</Link>
  }
  return tile
}
