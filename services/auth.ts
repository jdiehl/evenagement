import firebase from './firebase'

export async function email(email: string) {
  const actionCodeSettings = {
    url: 'http://localhost:3000/signin',
    dynamicLinkDomain: 'evenagement.com'
  }
  await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
}

export enum AuthProvider {
  Email,
  Google,
  Facebook,
  Apple
}

const getURLRoot = () => {
  return `${window.location.protocol}//${window.location.hostname}` + (window.location.port ? `:${window.location.port}` : '')
}

export async function signup(email: string, password: string): Promise<firebase.User> {
  const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
  if (!userCredential.user.emailVerified) {
    await userCredential.user.sendEmailVerification({
      url: `${getURLRoot()}/verifyEmail`
    })
  }
  return userCredential.user
}

export function auth() {
  return firebase.auth()
}
