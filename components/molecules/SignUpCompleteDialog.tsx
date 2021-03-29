import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SignUpCompleteDialog() {
  return (
    <div>
      <p className="text-5xl text-center mb-4 text-gray"><FontAwesomeIcon icon={faEnvelope} /></p>
      <p className="text-base text-center">
        We have sent you an email. Click the link inside to finish your registration.
      </p>
    </div>
  )
}
