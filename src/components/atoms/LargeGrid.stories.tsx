import { Story, Meta } from '@storybook/react'

import LargeGrid from './LargeGrid'

export default {
  title: 'Molecules/LargeGrid',
  component: LargeGrid,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <LargeGrid>
    {[...Array(args.tiles)].map((_, i) => <div key={i}>Tile #{i + 1}</div>)}
  </LargeGrid>
)

export const Primary = Template.bind({})
Primary.args = {
  tiles: 4
}
