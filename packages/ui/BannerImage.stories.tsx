import { Story, Meta } from '@storybook/react'

import { BannerImage } from './BannerImage'

export default {
  title: 'UI/BannerImage',
  component: BannerImage,
  argTypes: {}
} as Meta

const Template: Story<any> = ({ communityName, communityImage, eventName, eventImage }: any) => {
  const community = { name: communityName, image: communityImage }
  const event = eventImage ? { name: eventName, image: eventImage, date: null } : undefined
  return <BannerImage community={community} event={event} />
}

export const CommunityBanner = Template.bind({})
CommunityBanner.args = {
  communityName: 'The Great Community',
  communityImage: 'https://place-puppy.com/800x300',
  eventName: '',
  eventImage: ''
}

export const EventBanner = Template.bind({})
EventBanner.args = {
  communityName: 'The Great Community',
  communityImage: 'https://place-puppy.com/800x300',
  eventName: 'Amazing Event',
  eventImage: 'https://place-puppy.com/200x200'
}
