import Button from '@src/ui/Button'
import Container from '@src/ui/Container'
import Text from '@src/ui/Text'

export default function VerifyEmailContent() {
  return (
    <Container align="center" page gap padding>
      <Text align="center">Welcome on board. Start by exploring some communities.</Text>
      <Container row>
        <Button href="/communities">Go to Communities</Button>
      </Container>
    </Container>
  )
}
