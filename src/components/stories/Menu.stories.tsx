import { Story, Meta } from '@storybook/react'

import Menu from '@src/components/Menu'
import MenuItem from '@src/components/MenuItem'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <Menu {...args}>
    {[...Array(args.items)].map((_, i) => <MenuItem key={i} label={`Item ${i}`} />)}
  </Menu>
)

export const Primary = Template.bind({})
Primary.args = {
  show: true,
  items: 5
}
