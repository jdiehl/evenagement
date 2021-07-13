import { PlusCircle } from 'phosphor-react'
import { MouseEventHandler } from 'react'

import Text from './Text'

import Tile from '@src/components/Tile'

interface AddTileProps {
  label: String
  onClick?: MouseEventHandler<HTMLElement>
}

export default function AddTile({ label, onClick}: AddTileProps) {
  return (
    <Tile key={1} size={44} className="p-4 flex flex-col items-center justify-center text-center text-2xl text-gray border-gray-line border" onClick={onClick}>
      <PlusCircle className="mb-2" />
      <Text size="l">{label}</Text>
    </Tile>
  )
}
