import { Story, Meta } from '@storybook/react'

import CommunityForm from './CommunityForm'

export default {
  title: 'Molecules/CommunityForm',
  component: CommunityForm,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = ({ onSave, onCancel, ...args }) => {
  return <CommunityForm communityData={args} onSave={onSave} onCancel={onCancel} />
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'Some Community',
  description: 'Do laborum labore Lorem sint.',
  image: 'http://placekitten.com/800/200'
}
