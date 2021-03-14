import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
  return (
    <FontAwesomeIcon icon={faSpinner} size="2x" className="animate-spin text-gray-600" />
  )
}
