import { Story, Meta } from '@storybook/react'

import MainFooter from './MainFooter'

export default {
  title: 'MainFooter',
  component: MainFooter,
  argTypes: {}
} as Meta

const Template: Story = (args) => <MainFooter {...args} />

export const Primary = Template.bind({})
Primary.args = {}
