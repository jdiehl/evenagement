import { Story, Meta } from '@storybook/react'
import { ChangeEvent, useState } from 'react'

import PasswordField from './PasswordField'

export default {
  title: 'PasswordField',
  component: PasswordField,
} as Meta

function StatefulPasswordField({ password, label }: { password: string, label: string }) {
  const [value, setValue] = useState(password)
  const onChange = (ev: ChangeEvent<any>) => setValue(ev.target.value)
  return (
    <PasswordField password={value} label={label} onChange={onChange} />
  )
}

const Template: Story = (args) => <StatefulPasswordField password={args.password} label={args.label} />

export const Primary = Template.bind({})
Primary.args = {
  password: 'secret',
  label: 'Password'
}
