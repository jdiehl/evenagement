import { Story, Meta } from '@storybook/react'

import { MockDocument } from '../../lib/storybook'

import CommunityEdit from './CommunityEdit'

export default {
  title: 'Organisms/CommunityEdit',
  component: CommunityEdit,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = ({ onClose, onUpdate, ...args }) => {
  return <CommunityEdit onClose={onClose} community={MockDocument(args, onUpdate)}/>
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'Some Community',
  description: 'Do laborum labore Lorem sint.',
  image: 'http://placekitten.com/800/200'
}
