import { Story, Meta } from '@storybook/react'

import Sidebar from '@src/components/Sidebar'
import SidebarHeader from '@src/components/SidebarHeader'
import SidebarItem from '@src/components/SidebarItem'

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <Sidebar>
    <SidebarHeader>{args.header}</SidebarHeader>
    {[...Array(args.items)].map((_, i) => <SidebarItem key={i} href={`#${i}`}>Item {i + 1}</SidebarItem>)}
  </Sidebar>
)

export const Primary = Template.bind({})
Primary.args = {
  header: 'Sidebar',
  items: 4,
}
