import { PropsWithChildren } from 'react'

export default function HeroDescription({ children }: PropsWithChildren<{}>) {
  return (
    <p className="text-large text-center my-32 w-9/12 mx-auto">
      {children}
    </p>
)

}
