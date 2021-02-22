import Button from '@material-ui/core/Button'
import firebase from '../services/firebase'

export default function LoginButton() {
  // click handler
  const onClick = () => firebase.auth().signInAnonymously()

  return (
    <Button color="inherit" onClick={onClick}>Sign in</Button>
  )
}
