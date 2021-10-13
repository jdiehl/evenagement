import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import DatePicker from '@src/components/DatePicker'

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {}
} as Meta

const Template: Story = (args) => {
  const [date, setDate] = useState(new Date()) 
  return (
    <DatePicker label={args.label} value={date} onChange={setDate} />
)}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Date'
}