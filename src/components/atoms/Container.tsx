import { PropsWithChildren  } from 'react'

interface ContainerProps {
  direction?: 'row' | 'col'
  justify?: 'start' | 'center' | 'end'
  gap?: boolean
  padding?: boolean
}

export default function Container({ children, direction, justify, gap, padding }: PropsWithChildren<ContainerProps>) {
  const classes = [
    'flex',
    `flex-${direction ?? 'col'}`,
    `justify-${justify ?? 'start'}`,
    gap !== false && 'gap-4',
    padding && 'p-4'
  ]
  return (
    <div className={classes.filter(x => x).join(' ')}>
      {children}
    </div>
  )
}
