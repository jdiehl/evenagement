import { Button, Container, Text } from 'ui'

export function VerifyEmailStatic() {
  return (
    <Container align="center" page gap padding>
      <Text align="center">Welcome on board. Start by exploring some communities.</Text>
      <Container row>
        <Button href="/communities">Go to Communities</Button>
      </Container>
    </Container>
  )
}
