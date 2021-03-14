import { Story, Meta } from '@storybook/react'

import { init } from '../services/firebase'

import Home from './index'

init()

export default {
  title: 'Pages/Home',
  component: Home,
  argTypes: {}
} as Meta

const Template: Story = (args) => <Home {...args} />

export const Primary = Template.bind({})
Primary.args = {}
