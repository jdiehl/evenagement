import { PropsWithChildren } from 'react'

interface GridProps {
  cols: number
  gap?: boolean
  padding?: boolean
}

export default function Grid({ children, cols, gap, padding }: PropsWithChildren<GridProps>) {
  // Tailwind classes: md:grid-cols-2 md:grid-cols-3 md:grid-cols-4
  const classes = [
    'grid',
    `md:grid-cols-${cols}`,
    'grid-cols-1',
    gap && 'gap-4',
    padding && 'p-4'
  ]
  return (
    <div className={classes.filter(x => x).join(' ')}>
      {children}
    </div>
  )
}
