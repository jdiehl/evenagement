import { Story, Meta } from '@storybook/react'

import SignInWithButton from './SignInWithButton'

export default {
  title: 'Molecules/SignInWithButton',
  component: SignInWithButton,
} as Meta

const Template: Story<any> = (args) => <SignInWithButton provider={args.provider} />

export const Apple = Template.bind({})
Apple.args = { provider: 'apple' }

export const Email = Template.bind({})
Email.args = { provider: 'email' }

export const Facebook = Template.bind({})
Facebook.args = { provider: 'facebook' }

export const Google = Template.bind({})
Google.args = { provider: 'google' }
