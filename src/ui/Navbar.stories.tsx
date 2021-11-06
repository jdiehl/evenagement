import { Story, Meta } from '@storybook/react'

import Button from './Button'
import Container from './Container'
import Navbar from './Navbar'
import NavbarBrand from './NavbarBrand'
import NavbarItem from './NavbarItem'

export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <Navbar>
    <NavbarBrand>{args.brand}</NavbarBrand>
    {[...Array(args.items)].map((_, i) => <NavbarItem key={i} href={`#${i}`}>Item {i + 1}</NavbarItem>)}
    <Container grow />
    <Button>{args.button}</Button>
  </Navbar>
)

export const Primary = Template.bind({})
Primary.args = {
  brand: 'Some Brand',
  items: 4,
  button: 'Sign in'
}
