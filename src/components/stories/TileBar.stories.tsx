import { Story, Meta } from '@storybook/react'

import Tile from '@src/components/Tile'
import TileBar from '@src/components/TileBar'

export default {
  title: 'TileBar',
  component: TileBar,
  argTypes: {}
} as Meta

const Template: Story<any> = ({ text }) => (
  <Tile size={32}>
    <TileBar>{text}</ TileBar>
  </Tile>
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Label'
}
