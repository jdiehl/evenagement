import { Story, Meta } from '@storybook/react'

import EventTile from './EventTile'

export default {
  title: 'Molecules/EventTile',
  component: EventTile,
} as Meta

const Template: Story<any> = (args) => (
  <EventTile event={args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'My Event',
  date: new Date(),
  image: 'https://placekitten.com/300/300'
}
