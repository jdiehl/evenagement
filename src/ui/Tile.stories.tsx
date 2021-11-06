import { Story, Meta } from '@storybook/react'

import Tile from './Tile'

export default {
  title: 'UI/Tile',
  component: Tile,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <Tile {...args}>Tile</ Tile>
)

export const Fixed = Template.bind({})
Fixed.args = {
  size: 48
}

export const Flexible = Template.bind({})
Flexible.args = {
  width: 96,
  height: 32
}
