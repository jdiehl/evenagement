import { Story, Meta } from '@storybook/react'

import Text from './Text'

export default {
  title: 'UI/Text',
  component: Text,
  argTypes: {}
} as Meta

const Template: Story<any> = ({ label, ...args }: any) => <Text {...args}>{label}</Text>

export const H1 = Template.bind({})
H1.args = {
  label: 'Some Text',
  type: 'h1'
}

export const H2 = Template.bind({})
H2.args = {
  label: 'Some Text',
  type: 'h2'
}

export const P = Template.bind({})
P.args = {
  label: 'Some Text',
  type: 'p'
}
