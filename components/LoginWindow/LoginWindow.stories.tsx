import { Story, Meta } from '@storybook/react'

import LoginWindow from './LoginWindow'

export default {
  title: 'LoginWindow',
  component: LoginWindow,
} as Meta

const Template: Story<any> = (args) => <LoginWindow state={args.state} />

export const Primary = Template.bind({})
Primary.args = {}

export const SignUp = Template.bind({})
SignUp.args = { state: 'signup' }

export const VerifyEmail = Template.bind({})
VerifyEmail.args = { state: 'emailVerification' }
