import { Story, Meta } from '@storybook/react'

import Logo from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {}
} as Meta

const Template: Story = (args) => <Logo {...args} />

export const Primary = Template.bind({})
Primary.args = {
  height: 32,
  fill: '#000000'
}
