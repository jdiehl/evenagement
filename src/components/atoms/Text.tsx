import { PropsWithChildren } from 'react'

interface TextProps {
  type?: 'p' | 'h1' | 'h2'
}

export default function Text({ children, type = 'p' }: PropsWithChildren<TextProps>) {
  switch (type) {
    case 'p': return <p className="text-base">{children}</p>
    case 'h1': return <h1 className="font-bold text-2xl">{children}</h1>
    case 'h2': return <h2 className="font-bold text-base">{children}</h2>
  }
}
