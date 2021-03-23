import { MouseEventHandler, PropsWithChildren } from 'react'

type ButtonType = 'fill' | 'outline'

interface ButtonProps {
  label?: string
  type?: ButtonType
  href?: string
  onClick?: MouseEventHandler
  className?: string
  floating?: boolean
}

function extraStylesForType(type: ButtonType) {
  switch (type) {
    case 'fill': return ['text-white', 'bg-blue-600', 'hover:bg-blue-700', 'border', 'border-transparent']
    case 'outline': return ['text-blue-600', 'hover:text-white', 'bg-transparent', 'hover:bg-blue-700', 'border', 'border-solid', 'border-blue-600']
  }
}

function stylesForType(type: ButtonType) {
  let styles = ['px-6', 'py-2', 'select-none', 'text-base', 'font-medium', 'rounded', 'shadow', 'hover:shadow-lg', 'outline-none', 'focus:outline-none', 'cursor-pointer']
  styles = styles.concat(extraStylesForType(type))
  return styles.join(' ')
}

export default function Button({ children, label, type, floating, className, ...props }: PropsWithChildren<ButtonProps>) {
  let classes = stylesForType(type || 'fill')
  if (className) { classes += ` ${className}` }
  const style = { transition: 'all .15s ease' }

  if (floating) {
    classes += ' rounded-full shadow-xl'
  }
  return (
    <a className={classes} style={style} {...props}>{label || children}</a>
  )
}
