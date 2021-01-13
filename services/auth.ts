import firebase from './firebase'

export async function email(email: string) {
  const actionCodeSettings = {
    url: 'https://localhost:3000/signin',
    dynamicLinkDomain: 'evenagement.com'
  }
  await firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
}
