import { Story, Meta } from '@storybook/react'

import LoginButton from './LoginButton'

export default {
  title: 'LoginButton',
  component: LoginButton,
  argTypes: {}
} as Meta

const Template: Story = (args) => <LoginButton {...args} />

export const Primary = Template.bind({})
Primary.args = {}
