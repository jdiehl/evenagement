import { Story, Meta } from '@storybook/react'

import Container from '@src/components/Container'

export default {
  title: 'Container',
  component: Container,
} as Meta

const Template: Story<any> = (args) => (
  <Container {...args}>
    <div className="h-16 w-16 bg-primary border-white border" />
    <div className="h-24 w-24 bg-primary border-white border" />
    <div className="h-16 w-16 bg-primary border-white border" />
  </Container>
)

export const Column = Template.bind({})
Column.args = {
}

export const Row = Template.bind({})
Row.args = {
  row: true
}
