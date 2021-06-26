import Link from 'next/link'

import CoverImage from '@src/components/CoverImage'
import Text from '@src/components/Text'
import Tile from '@src/components/Tile'
import TileBar from '@src/components/TileBar'
import { Community } from '@src/model/Community'

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
