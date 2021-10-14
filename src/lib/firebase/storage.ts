import { getApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

export function storage() {
  return getStorage(getApp())
}
