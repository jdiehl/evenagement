import { Story, Meta } from '@storybook/react'

import { Button } from './Button'
import { Form } from './Form'
import { Input } from './Input'

export default {
  title: 'UI/Form',
  component: Form,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <Form buttons={...Array(args.buttons).map(i => <Button key={i}>Button {i + 1}</Button>)}>
    <Input label="Input"/>
  </Form>
)

export const Primary = Template.bind({})
Primary.args = {
  buttons: 2
}
