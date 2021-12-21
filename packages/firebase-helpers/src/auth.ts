import { getApp } from 'firebase/app'
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, OAuthProvider, sendSignInLinkToEmail, User, signOut as fbSignOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, EmailAuthProvider } from 'firebase/auth'

export type AuthProvider = 'email' | 'google' | 'facebook' | 'apple'

const getURLRoot = () => {
  return `${window.location.protocol}//${window.location.hostname}` + (window.location.port ? `:${window.location.port}` : '')
}

function makeAuthProvider(authProvider: AuthProvider) {
  switch (authProvider) {
    case 'apple': return new OAuthProvider('apple.com')
    case 'facebook': return new FacebookAuthProvider()
    case 'google': return new GoogleAuthProvider()
    default: throw new Error('Missing Auth Provider Definition')
  }
}

export async function signinWithEmail(email: string): Promise<void> {
  const actionCodeSettings = {
    url: 'http://localhost:3000/signin',
    dynamicLinkDomain: 'evenagement.com'
  }
  await sendSignInLinkToEmail(auth(), email, actionCodeSettings)
}

export async function signOut(): Promise<void> {
  return fbSignOut(auth())
}

export async function signUp(email: string, password: string): Promise<void> {
  const { user } = await createUserWithEmailAndPassword(auth(), email, password)
  if (!user.emailVerified) {
    await sendEmailVerification(user, { url: `${getURLRoot()}/verify-email` })
  }
}

export async function signIn(email: string, password: string): Promise<void> {
  const { user } = await signInWithEmailAndPassword(auth(), email, password)
  if (!user.emailVerified) throw new Error('Email address is not verified')
}

// sign in with the given auth provider
export async function signInWith(authProvider: AuthProvider) {
  const provider = makeAuthProvider(authProvider)
  await signInWithPopup(auth(), provider)
}

// check if the user is valid
export function isValidUser(user: User | null | undefined): Boolean {
  if (!user) return false
  if (user.providerData[0].providerId === EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD && !user.emailVerified) return false
  return true
}

export function auth() {
  return getAuth(getApp())
}
