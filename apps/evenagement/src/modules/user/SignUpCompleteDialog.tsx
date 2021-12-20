import { Envelope } from 'phosphor-react'
import { Container, Text } from 'ui'

export default function SignUpCompleteDialog() {
  return (
    <Container align="center">
      <Text color="primary" margin={4}>
        <Envelope size={64} weight="duotone" />
      </Text>
      <Text align="center">
        We have sent you an email. Click the link inside to finish your registration.
      </Text>
    </Container>
  )
}
