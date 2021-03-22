import { Story, Meta } from '@storybook/react'

import Hero from './Hero'

export default {
  title: 'Molecules/Hero',
  component: Hero,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <Hero {...args} />

export const Primary = Template.bind({})
Primary.args = {
}
