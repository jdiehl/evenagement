import { Story, Meta } from '@storybook/react'

import FooterItem from './FooterItem'

export default {
  title: 'FooterItem',
  component: FooterItem,
  argTypes: {}
} as Meta

const Template: Story = ({ label, ...args }) => (
  <FooterItem {...args}>{label}</FooterItem>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Item'
}
