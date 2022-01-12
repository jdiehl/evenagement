import { CSSProperties, PropsWithChildren } from 'react'

interface CoverTextProps {
  bgColor: string
}

export function CoverText({ bgColor, children }: PropsWithChildren<CoverTextProps>) {
  const style: CSSProperties = { backgroundColor: bgColor }
  return (
    <div style={style} className="w-full h-full flex justify-center items-center text-5xl text-white">{children}</div>
  )
}
