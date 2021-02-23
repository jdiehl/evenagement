import firebase from './firebase'

export async function email(email: string) {
  const actionCodeSettings = {
    url: 'https://localhost:3000/signin',
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

export async function signup(email: string, password: string): Promise<firebase.User> {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        resolve(userCredential.user)
      })
      .catch(reject)
  })
}

export function auth() {
  return firebase.auth()
}
