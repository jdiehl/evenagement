import { Story, Meta } from '@storybook/react'

import EventDetails from './EventDetails'

import { Community, CommunityEvent } from '@src/lib/store'
import { MockDocument } from '@src/lib/storybook'

export default {
  title: 'Organisms/EventDetails',
  component: EventDetails,
  argTypes: {}
} as Meta

// eslint-disable-next-line react/prop-types
const Template: Story<any> = ({ communityName, communityImage, title, date, image }) => {
  const event = MockDocument<CommunityEvent>({ title, image, date: { toDate: () => date } } as any)
  const community = MockDocument<Community>({ name: communityName, description: '', image: communityImage })
  return <EventDetails community={community} event={event}/>
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'Daily Session',
  date: Date.now(),
  image: 'https://place-puppy.com/400x400',
  communityName: 'Some Community',
  communityImage: 'https://place-puppy.com/800x200'
}
