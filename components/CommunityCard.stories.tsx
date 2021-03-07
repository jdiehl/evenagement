import { Story, Meta } from '@storybook/react'

import CommunityCard from './CommunityCard'

export default {
  title: 'CommunityCard',
  component: CommunityCard,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta

const Template: Story<any> = (args) => <CommunityCard community={args} onClick={args.onClick}/>

export const Primary = Template.bind({})
Primary.args = {
  name: 'My Community',
  description: 'Lorem ipsum...',
  image: ''
}
