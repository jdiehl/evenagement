export namespace Data {

  export interface Event {
    title: string
    image: string
  }

  export interface Community {
    name: string
    description?: string
    image?: string
  }

}

// eslint-disable-next-line no-unused-vars
export interface Entity<T> {
  collection: string
}

export namespace Entities {
  export const Event: Entity<Data.Event> = {
    collection: 'event'
  }

  export const Community: Entity<Data.Community> = {
    collection: 'communities'
  }
}
