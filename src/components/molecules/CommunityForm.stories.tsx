import { Story, Meta } from '@storybook/react'

import CommunityForm from './CommunityForm'

import { MockRef } from '@src/lib/storybook'
import { Community } from '@src/model/Community'

export default {
  title: 'Molecules/CommunityForm',
  component: CommunityForm,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = ({ onClose, ...args }) => {
  const ref = MockRef<Community>()
  return (
    <CommunityForm communityRef={ref} onClose={onClose} />
  )
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'Some Community',
  description: 'Do laborum labore Lorem sint.',
  image: 'http://placekitten.com/800/200'
}
