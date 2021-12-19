import { format } from 'date-fns'
import { NotePencil } from 'phosphor-react'
import Button from 'ui/Button'
import Container from 'ui/Container'
import Text from 'ui/Text'

import { CommunityDocument } from '@community/model/Community'

import { CommunityEventDocument } from './model/CommunityEvent'

interface EventDetailContentProps {
  community: CommunityDocument
  event: CommunityEventDocument
}

export default function EventDetailContent({ community, event }: EventDetailContentProps) {

  return (
    <Container gap>
      <Container row align="start">
        <Text type="h1">{event.data().name}</Text>
        <Container grow />
        <Button href={`/communities/${community.id}/events/${event.id}/edit`} round>
          <NotePencil/>
        </Button>
      </Container>

      <Text type="h2">{format(event.data().date.toDate(), 'P – p')}</Text>
      <Text>Eu do pariatur consectetur officia cillum cupidatat aliqua duis incididunt irure. Sint qui duis velit excepteur pariatur minim fugiat tempor mollit labore. Officia cupidatat aute nisi duis. Nisi ea veniam ut occaecat ipsum eu ipsum velit labore incididunt. Adipisicing sit nulla cillum amet quis sunt id et labore deserunt veniam cupidatat cillum.</Text>
      <Text>Lorem veniam tempor minim aliqua cupidatat anim dolor fugiat fugiat officia tempor esse. Enim sunt elit ea ea. Amet occaecat exercitation labore incididunt reprehenderit laborum et cillum veniam tempor duis consequat cillum. Cillum aute fugiat irure reprehenderit aliquip fugiat fugiat ipsum.</Text>
      <Text>Voluptate enim id aliqua irure ullamco culpa Lorem laborum id labore. Exercitation do est tempor cupidatat dolore nostrud incididunt proident nostrud esse excepteur pariatur aute amet. Amet veniam incididunt aliqua adipisicing sit sit. In minim laboris eu pariatur dolore exercitation ipsum do sunt. Est ipsum pariatur adipisicing quis nostrud.</Text>
    </Container>
  )
}
