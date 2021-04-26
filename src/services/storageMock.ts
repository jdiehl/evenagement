import firebase from 'firebase/app'

const storageMock = ({
  child: (url: string) => ({
    put: async (arg: any) => ({
      ref: {
        getDownloadURL: async () => { return 'https://placekitten.com/1200/300' }
      }
    })
  } as unknown as firebase.storage.Reference)
} as unknown as firebase.storage.Reference)

export default storageMock
