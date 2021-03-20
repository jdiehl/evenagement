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
    case 'fill': return ['text-white', 'bg-primary', 'hover:bg-primary-dark', 'border', 'border-transparent']
    case 'outline': return ['text-primary', 'hover:text-white', 'bg-transparent', 'hover:bg-primary-dark', 'border', 'border-solid', 'border-primary', 'hover:border-primary-dark']
  }
}

function stylesForType(type: ButtonType) {
  let styles = ['transition-all', 'px-6', 'py-2', 'select-none', 'text-base', 'font-medium', 'rounded', 'shadow', 'hover:shadow-lg', 'outline-none', 'focus:outline-none', 'cursor-pointer']
  styles = styles.concat(extraStylesForType(type))
  return styles.join(' ')
}

export default function Button({ children, label, type, ...props }: PropsWithChildren<ButtonProps>) {
  const className = stylesForType(type || 'fill')
  return (
    <a className={className} {...props}>{label || children}</a>
  )
}
