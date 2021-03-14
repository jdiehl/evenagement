import { Story, Meta } from '@storybook/react'

import { init } from '../services/firebase'

import VerifyEmail from './verifyEmail'

init()

export default {
  title: 'Pages/VerifyEmail',
  component: VerifyEmail,
  argTypes: {}
} as Meta

const Template: Story = (args) => <VerifyEmail {...args} />

export const Primary = Template.bind({})
Primary.args = {}
