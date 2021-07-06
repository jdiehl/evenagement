import { Story, Meta } from '@storybook/react'

import CommunityTile from '@src/components/CommunityTile'

export default {
  title: 'CommunityTile',
  component: CommunityTile,
} as Meta

const Template: Story<any> = (args) => (
  <CommunityTile community={args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'My Community',
  description: 'Lorem ipsum...',
  image: 'https://place-puppy.com/400x200'
}
