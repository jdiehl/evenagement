import { FormEventHandler, ReactNode, PropsWithChildren } from 'react'

import ButtonBar from '@src/components/ButtonBar'
import Container from '@src/components/Container'

interface FormProps {
  buttons?: ReactNode | ReactNode[]
  onSubmit?: FormEventHandler
}

export default function Form({ onSubmit, buttons, children }: PropsWithChildren<FormProps>) {
  const makeButtons = () => {
    if (!buttons || (buttons instanceof Array && buttons.length === 0)) return null
    return <ButtonBar>{buttons}</ButtonBar>
  }
  return (
    <form onSubmit={onSubmit}>
      <Container gap>
        {children}
        {makeButtons()}
      </Container>
    </form>
  )
}
