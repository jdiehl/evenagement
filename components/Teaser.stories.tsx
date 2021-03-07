import { Story, Meta } from '@storybook/react'

import Teaser from './Teaser'

export default {
  title: 'Teaser',
  component: Teaser,
  argTypes: {}
} as Meta

const Template: Story = (args) => <Teaser {...args} />

export const Primary = Template.bind({})
Primary.args = {}
