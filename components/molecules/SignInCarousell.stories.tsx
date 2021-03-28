import { Story, Meta } from '@storybook/react'

import SignInCarousell from './SignInCarousell'

export default {
  title: 'Molecules/SignInCarousell',
  component: SignInCarousell,
  argTypes: {}
} as Meta

const Template: Story = (args) => <SignInCarousell className="w-80" {...args} />

export const SignIn = Template.bind({})
SignIn.args = {
  index: 0
}

export const SignUp = Template.bind({})
SignUp.args = {
  index: 1
}
