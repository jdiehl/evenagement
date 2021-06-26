import { format } from 'date-fns'

import Container from '@src/components/Container'
import Text from '@src/components/Text'
import { CommunityEvent } from '@src/model/CommunityEvent'

interface EventDetailContentProps {
  event: CommunityEvent
}

export default function EventDetailContent({ event }: EventDetailContentProps) {
  return (
    <Container gap>
      <Text type="h1">{event.name}</Text>
      <Text type="h2">{format(event.date.toDate(), 'P – p')}</Text>
      <Text>Eu do pariatur consectetur officia cillum cupidatat aliqua duis incididunt irure. Sint qui duis velit excepteur pariatur minim fugiat tempor mollit labore. Officia cupidatat aute nisi duis. Nisi ea veniam ut occaecat ipsum eu ipsum velit labore incididunt. Adipisicing sit nulla cillum amet quis sunt id et labore deserunt veniam cupidatat cillum.</Text>
      <Text>Lorem veniam tempor minim aliqua cupidatat anim dolor fugiat fugiat officia tempor esse. Enim sunt elit ea ea. Amet occaecat exercitation labore incididunt reprehenderit laborum et cillum veniam tempor duis consequat cillum. Cillum aute fugiat irure reprehenderit aliquip fugiat fugiat ipsum.</Text>
      <Text>Voluptate enim id aliqua irure ullamco culpa Lorem laborum id labore. Exercitation do est tempor cupidatat dolore nostrud incididunt proident nostrud esse excepteur pariatur aute amet. Amet veniam incididunt aliqua adipisicing sit sit. In minim laboris eu pariatur dolore exercitation ipsum do sunt. Est ipsum pariatur adipisicing quis nostrud.</Text>
    </Container>
  )
}
