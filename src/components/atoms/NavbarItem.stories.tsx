import { Story, Meta } from '@storybook/react'

import NavbarItem from './NavbarItem'

export default {
  title: 'Atoms/NavbarItem',
  component: NavbarItem,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <NavbarItem active={args.active} href={args.href}>{args.label}</NavbarItem>

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
