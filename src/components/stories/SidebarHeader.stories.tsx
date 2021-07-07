import { Story, Meta } from '@storybook/react'

import Sidebar from '@src/components/Sidebar'
import SidebarHeader from '@src/components/SidebarHeader'

export default {
  title: 'SidebarHeader',
  component: SidebarHeader,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <Sidebar>
  <SidebarHeader href={args.href}>{args.label}</SidebarHeader>
</Sidebar>

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some Item',
  href: '#',
}
