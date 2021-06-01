import { Story, Meta } from '@storybook/react'

import CommunityDetailContent from './CommunityDetailContent'

import { MockDocument } from '@src/lib/storybook'

export default {
  title: 'Molecules/CommunityDetailContent',
  component: CommunityDetailContent,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = (args) => {
  return <CommunityDetailContent community={MockDocument(args)}/>
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'Some Community',
  description: 'Do laborum labore Lorem sint.',
  image: 'http://placekitten.com/800/200',
}
