import { SpinnerGap } from 'phosphor-react'

interface LoadingProps {
  className?: string
}

export function Loading({ className }: LoadingProps) {
  return (
    <SpinnerGap size={32} className={'animate-spin text-gray ' + (className ?? '')} />
  )
}
