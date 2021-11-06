import { Story, Meta } from '@storybook/react'

import Sidebar from './Sidebar'
import SidebarHeader from './SidebarHeader'
import SidebarItem from './SidebarItem'

export default {
  title: 'UI/Sidebar',
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
