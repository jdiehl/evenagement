import { Story, Meta } from '@storybook/react'

import Sidebar from '@src/components/Sidebar'
import SidebarItem from '@src/components/SidebarItem'

export default {
  title: 'SidebarItem',
  component: SidebarItem,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <Sidebar>
  <SidebarItem active={args.active} href={args.href}>{args.label}</SidebarItem>
</Sidebar>

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some Item',
  href: '#',
  active: false
}

export const Active = Template.bind({})
Active.args = {
  label: 'Active Item',
  href: '#',
  active: true
}
