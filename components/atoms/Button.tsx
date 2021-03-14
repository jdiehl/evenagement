import { MouseEventHandler, PropsWithChildren } from 'react'

type ButtonType = 'fill' | 'outline'

interface ButtonProps {
  label?: string
  type?: ButtonType
  href?: string
  onClick?: MouseEventHandler
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

export default function Button({ children, label, type, ...props }: PropsWithChildren<ButtonProps>) {
  const className = stylesForType(type || 'fill')
  const style = { transition: 'all .15s ease' }
  return (
    <a className={className} style={style} {...props}>{label || children}</a>
  )
}
