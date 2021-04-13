import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import Button from './Button'
import Toast from './Toast'

export default {
  title: 'Atoms/Toast',
  component: Toast,
  argTypes: {}
} as Meta

const Template: Story<any> = ({ type }: any) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button onClick={() => setShow(true)}>Show Toast</Button>
      <Toast show={show} onHide={() => setShow(false)} type={type}>
        <p className="font-bold">The Toast</p>
        <p>Pariatur qui quis laborum ipsum sint qui eiusmod laborum incididunt ea. Ad eiusmod anim cupidatat ut cillum ut mollit duis. Sit deserunt pariatur minim officia anim enim. Cillum do est mollit duis mollit labore ut aute ipsum sint consectetur exercitation adipisicing.</p>
      </Toast>
    </>
  )
}

export const Info = Template.bind({})
Info.args = {
  type: 'info',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
}
export const Error = Template.bind({})
Error.args = {
  type: 'error',
}
