import { Story, Meta } from '@storybook/react'

import Button from '@src/components/Button'
import Form from '@src/components/Form'
import Input from '@src/components/Input'

export default {
  title: 'Form',
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
