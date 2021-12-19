import { Story, Meta } from '@storybook/react'

import Sidebar from './Sidebar'
import SidebarHeader from './SidebarHeader'

export default {
  title: 'UI/SidebarHeader',
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
