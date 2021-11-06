import { Story, Meta } from '@storybook/react'

import HeroDescription from './HeroDescription'

export default {
  title: 'HeroDescription',
  component: HeroDescription,
  argTypes: {}
} as Meta

const Template: Story<any> = ({ text }) => (
  <HeroDescription>{text}</HeroDescription>
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Evenagement is a platform for communities to organize events. As a host you can invite and manage your members, create and announce events, track RSVPs and attendance, and post summaries of past events including slides and videos.'
}
