import { Story, Meta } from '@storybook/react'

import GoogleIcon from './GoogleIcon'

export default {
  title: 'GoogleIcon',
  component: GoogleIcon,
  argTypes: {}
} as Meta

const Template: Story = (args) => <GoogleIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
