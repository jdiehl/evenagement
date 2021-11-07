import { Story, Meta } from '@storybook/react'

import Hero from './Hero'

export default {
  title: 'UI/Hero',
  component: Hero,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <div className="bg-black">
    <Hero {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
}
