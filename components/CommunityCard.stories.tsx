import { Story, Meta } from '@storybook/react'
import CommunityCard from './CommunityCard'
import { Data } from '../services/collections'

export default {
  title: 'CommunityCard',
  component: CommunityCard,
  argTypes: {}
} as Meta

const Template: Story<Data.Community> = (community) => <CommunityCard community={community} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'My Community',
  description: 'Lorem ipsum...',
  image: ''
}
