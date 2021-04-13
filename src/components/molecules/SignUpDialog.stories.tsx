import { Story, Meta } from '@storybook/react'

import SignUpDialog from './SignUpDialog'

export default {
  title: 'Molecules/SignUpDialog',
  component: SignUpDialog,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <SignUpDialog {...args} />

export const Primary = Template.bind({})
Primary.args = {}
