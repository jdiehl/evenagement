import { Story, Meta } from '@storybook/react'

import NavbarBrand from './NavbarBrand'

export default {
  title: 'Atoms/NavbarBrand',
  component: NavbarBrand,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <NavbarBrand href={args.href}>{args.label}</NavbarBrand>

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some Brand',
  href: '#'
}
