import { Story, Meta } from '@storybook/react'

import Menu from './Menu'
import MenuItem from './MenuItem'

export default {
  title: 'Atoms/Menu',
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
