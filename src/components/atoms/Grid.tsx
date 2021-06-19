import { PropsWithChildren } from 'react'

interface GridProps {
  cols: number
  gap?: boolean
  padding?: boolean
}

export default function Grid({ children, cols, gap, padding }: PropsWithChildren<GridProps>) {
  const classes = [
    'grid',
    `md:grid-cols-${cols}`,
    'grid-cols-1',
    gap !== false && 'gap-4',
    padding && 'p-4'
  ]
  return (
    <div className={classes.filter(x => x).join(' ')}>
      {children}
    </div>
  )
}
