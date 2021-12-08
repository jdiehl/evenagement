import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import ImageInput from './ImageInput'

export default {
  title: 'UI/ImageInput',
  component: ImageInput,
  argTypes: {}
} as Meta

const Template: Story<any> = (args: any) => {
  const [value, setValue] = useState(args.value)
  return <ImageInput {...args} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some Image',
  src: 'https://place-puppy.com/300x300',
  height: 200
}
