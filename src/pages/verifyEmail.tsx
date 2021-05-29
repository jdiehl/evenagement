import Button from '@src/components/atoms/Button'
import Main from '@src/components/organisms/Main'
import Link from 'next/link'

export default function VerifyEmail() {
  return (
    <Main>
      <div className="text-center text-base my-24">
        <p className="mb-12">Welcome on board. Start by exploring some communities.</p>
        <Link href="/communities">
          <Button>Go to Communities</Button>
        </Link>
      </div>
    </Main>
  )
}
