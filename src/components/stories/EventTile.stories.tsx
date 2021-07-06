import { Story, Meta } from '@storybook/react'

import EventTile from '@src/components/EventTile'

export default {
  title: 'EventTile',
  component: EventTile,
} as Meta

const Template: Story<any> = ({ title, date, image }: any) => {
  const event = { title, image, date: { toDate: () => date } } as any
  return <EventTile event={event}/>
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'My Event',
  date: new Date(),
  image: 'https://placekitten.com/300/300'
}
