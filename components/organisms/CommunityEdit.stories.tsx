import { Story, Meta } from '@storybook/react'

import CommunityEdit from './CommunityEdit'

export default {
  title: 'Organisms/CommunityEdit',
  component: CommunityEdit,
  argTypes: {}
} as Meta

const Template: Story<any> = ({ onSave, ...doc }) => {
  return <CommunityEdit onSave={onSave} doc={doc}/>
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'Some Community',
  description: 'Do laborum labore Lorem sint.',
  image: 'http://placekitten.com/800/200'
}
