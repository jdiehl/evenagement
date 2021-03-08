import firebase from './firebase'

export type AuthProvider = 'email' | 'google' | 'facebook' | 'apple'

const getURLRoot = () => {
  return `${window.location.protocol}//${window.location.hostname}` + (window.location.port ? `:${window.location.port}` : '')
}

function makeAuthProvider(authProvider: AuthProvider) {
  switch (authProvider) {
    case 'apple': return new firebase.auth.OAuthProvider('apple.com')
    case 'facebook': return new firebase.auth.FacebookAuthProvider()
    case 'google': return new firebase.auth.GoogleAuthProvider()
    default: throw new Error('Missing Auth Provider Definition')
  }
}

export async function email(email: string) {
  const actionCodeSettings = {
    url: 'http://localhost:3000/signin',
    dynamicLinkDomain: 'evenagement.com'
  }
  await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
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

// sign in with the given auth provider
export async function signInWith(authProvider: AuthProvider) {
  const provider = makeAuthProvider(authProvider)
  await firebase.auth().signInWithPopup(provider)
}

// check if the user is valid
export function isValidUser(user: firebase.User | undefined): Boolean {
  if (!user) return false
  if (user.providerData[0].providerId === firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD &&
    !user.emailVerified) return false
  return true
}
