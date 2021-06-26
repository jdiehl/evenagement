import { Story, Meta } from '@storybook/react'

import SignInButton from '@src/components/SignInButton'

export default {
  title: 'SignInButton',
  component: SignInButton,
  argTypes: {}
} as Meta

const Template: Story = (args) => <SignInButton {...args} />

export const Primary = Template.bind({})
Primary.args = {}
