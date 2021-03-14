import { Story, Meta } from '@storybook/react'

import CommunityGrid from './CommunityGrid'
import CommunityTile from './CommunityTile'

export default {
  title: 'Molecules/CommunityGrid',
  component: CommunityGrid,
  argTypes: {}
} as Meta

const community = {
  name: 'My Community',
  description: 'In ipsum tempor voluptate proident velit cupidatat pariatur minim aliquip.',
  image: 'https://placekitten.com/600/300'
}

const Template: Story<any> = (args) => (
  <CommunityGrid>
    {[...Array(args.tiles)].map((i) => <CommunityTile key={i} community={community} />)}
  </CommunityGrid>
)

export const Primary = Template.bind({})
Primary.args = {
  tiles: 4
}
