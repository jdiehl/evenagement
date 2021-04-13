import { Story, Meta } from '@storybook/react'

import CommunityEdit from './CommunityEdit'

export default {
  title: 'Organisms/CommunityEdit',
  component: CommunityEdit,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = ({ onSave, ...doc }) => {
  return <CommunityEdit onSave={onSave} doc={doc}/>
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'Some Community',
  description: 'Do laborum labore Lorem sint.',
  image: 'http://placekitten.com/800/200'
}
