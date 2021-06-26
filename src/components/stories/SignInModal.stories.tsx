import { Story, Meta } from '@storybook/react'

import SignInModal from '@src/components/SignInModal'

export default {
  title: 'SignInModal',
  component: SignInModal,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <SignInModal {...args} />

export const SignIn = Template.bind({})
SignIn.args = {
  show: true,
  index: 0
}

export const SignUp = Template.bind({})
SignUp.args = {
  show: true,
  index: 1
}

export const SignUpComplete = Template.bind({})
SignUpComplete.args = {
  show: true,
  index: 2
}
