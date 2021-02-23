import { Story, Meta } from '@storybook/react'
import Loading from './Loading'

export default {
  title: 'Loading',
  component: Loading,
  argTypes: {}
} as Meta

const Template: Story = (args) => <Loading {...args} />

export const Primary = Template.bind({})
Primary.args = {}
