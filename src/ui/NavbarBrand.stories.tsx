import { Story, Meta } from '@storybook/react'

import NavbarBrand from './NavbarBrand'

export default {
  title: 'NavbarBrand',
  component: NavbarBrand,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <div className="bg-primary-dark">
    <NavbarBrand href={args.href}>{args.label}</NavbarBrand>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some Brand',
  href: '#'
}
