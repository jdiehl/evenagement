import { Envelope } from 'phosphor-react'

export default function SignUpCompleteDialog() {
  return (
    <div className="flex flex-col items-center">
      <Envelope size={64} weight="duotone" className="mb-4 text-primary" />
      <p className="text-base text-center">
        We have sent you an email. Click the link inside to finish your registration.
      </p>
    </div>
  )
}
