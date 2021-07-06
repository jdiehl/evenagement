import { Story, Meta } from '@storybook/react'

import Button from '@src/components/Button'
import Container from '@src/components/Container'
import Navbar from '@src/components/Navbar'
import NavbarBrand from '@src/components/NavbarBrand'
import NavbarItem from '@src/components/NavbarItem'

export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <Navbar>
    <NavbarBrand>{args.brand}</NavbarBrand>
    {[...Array(args.items)].map((_, i) => <NavbarItem key={i} href="#">Item {i}</NavbarItem>)}
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
