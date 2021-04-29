import { Story, Meta } from '@storybook/react'

import EventDetails from './EventDetails'

export default {
  title: 'Organisms/EventDetails',
  component: EventDetails,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = ({ event, ...args }) => {
  return <EventDetails community={args} event={event}/>
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'Some Community',
  description: 'Do laborum labore Lorem sint.',
  image: 'http://placekitten.com/800/200',
  event: {
    title: 'Daily Session',
    date: Date.now(),
    image: 'http://placekitten.com/400/400'
  }
}
