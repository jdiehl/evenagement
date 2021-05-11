import { Story, Meta } from '@storybook/react'

import CommunityCreate from './CommunityCreate'

export default {
  title: 'Organisms/CommunityCreate',
  component: CommunityCreate,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = ({ onClose, onUpdate, ...args }) => {
  return <CommunityCreate onClose={onClose}/>
}

export const Primary = Template.bind({})
Primary.args = {
}
