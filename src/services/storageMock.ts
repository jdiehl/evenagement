import firebase from 'firebase/app'

const storageMock = ({
  child: (url: string) => ({
    put: async (arg: any) => ({
      ref: {
        getDownloadURL: async () => { return '/headerImage/chess.jpg' }
      }
    })
  } as unknown as firebase.storage.Reference)
} as unknown as firebase.storage.Reference)

export default storageMock
