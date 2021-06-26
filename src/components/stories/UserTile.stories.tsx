import { Story, Meta } from '@storybook/react'

import UserTile from '@src/components/UserTile'

export default {
  title: 'UserTile',
  component: UserTile,
} as Meta

const Template: Story<any> = (args) => {
  return <UserTile userProfile={args}/>
}

export const Image = Template.bind({})
Image.args = {
  name: 'John Doe',
  image: 'https://place-puppy.com/200x200'
}

export const Initials = Template.bind({})
Initials.args = {
  name: 'John Doe'
}
