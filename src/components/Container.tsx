import { PropsWithChildren  } from 'react'

interface ContainerProps {
  row?: boolean
  justify?: 'start' | 'center' | 'end'
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  gap?: boolean
  padding?: boolean
  fill?: boolean
  page?: boolean
  grow?: boolean
  shadow?: boolean
  className?: string
}

export default function Container(props: PropsWithChildren<ContainerProps>) {
  // Tailwind classes: justify-start justify-center justify-end items-start items-center items-end items-baseline items-stretch
  const className = [
    'flex',
    props.row ? 'flex-row' : 'flex-col',
    props.grow && 'flex-grow',
    props.justify && `justify-${props.justify}`,
    props.align && `items-${props.align}`,
    props.gap && 'gap-4',
    props.padding && 'p-4',
    props.fill && 'min-h-screen',
    props.page && 'w-full max-w-screen-xl mx-auto',
    props.shadow && 'shadow',
    props.className
  ].filter(x => x).join(' ')
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
