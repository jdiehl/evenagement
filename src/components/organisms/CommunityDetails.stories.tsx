import { Story, Meta } from '@storybook/react'

import CommunityDetails from './CommunityDetails'

import { MockDocument } from '@src/lib/storybook'

export default {
  title: 'Organisms/CommunityDetails',
  component: CommunityDetails,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = (args) => {
  return <CommunityDetails community={MockDocument(args)}/>
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'Some Community',
  description: 'Do laborum labore Lorem sint.',
  image: 'http://placekitten.com/800/200',
}
