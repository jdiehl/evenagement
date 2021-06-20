import { PropsWithChildren  } from 'react'

interface ContainerProps {
  direction?: 'row' | 'col'
  justify?: 'start' | 'center' | 'end'
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  gap?: boolean
  padding?: boolean
  fill?: boolean
  page?: boolean
  grow?: boolean
  className?: string
}

export default function Container({ children, direction, grow, justify, align, gap, padding, fill, page, className }: PropsWithChildren<ContainerProps>) {
  const classes = [
    'flex',
    `flex-${direction ?? 'col'}`,
    grow && 'flex-grow',
    justify && `justify-${justify}`,
    align && `items-${align}`,
    gap && 'gap-4',
    padding && 'p-4',
    fill && 'min-h-screen',
    page && 'w-full max-w-screen-xl mx-auto',
    className
  ]
  return (
    <div className={classes.filter(x => x).join(' ')}>
      {children}
    </div>
  )
}
