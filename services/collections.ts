export namespace Data {

  export interface Event {
    title: string
    image: string
  }

  export interface Community {
    name: string
    details: {
      description?: string
      image?: string
    }
  }

}

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
