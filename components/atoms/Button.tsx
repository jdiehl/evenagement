import { createElement, MouseEventHandler, PropsWithChildren } from 'react'

type ButtonType = 'fill' | 'outline'
type ButtonTag = 'a' | 'button'

interface ButtonProps {
  label?: string
  type?: ButtonType
  tag?: ButtonTag
  href?: string
  onClick?: MouseEventHandler
}

function extraStylesForTag(tag: ButtonTag) {
  switch (tag) {
    case 'a': return ['px-6', 'py-3']
    case 'button': return ['px-3', 'py-1']
  }
}

function extraStylesForType(type: ButtonType) {
  switch (type) {
    case 'fill': return ['text-white', 'bg-blue-600', 'hover:bg-blue-700']
    case 'outline': return ['text-blue-600', 'hover:text-white', 'bg-transparent', 'hover:bg-blue-700', 'border', 'border-solid', 'border-blue-600']
  }
}

function stylesForType(tag: ButtonTag, type: ButtonType) {
  let styles = ['select-none', 'font-medium', 'rounded', 'shadow', 'hover:shadow-lg', 'outline-none', 'focus:outline-none']
  styles = styles.concat(extraStylesForTag(tag))
  styles = styles.concat(extraStylesForType(type))
  return styles.join(' ')
}

export default function Button({ children, label, tag, type, ...props }: PropsWithChildren<ButtonProps>) {
  const className = stylesForType(tag || 'a', type || 'fill')
  const style = { transition: 'all .15s ease' }
  return createElement(tag || 'a', { className, style, ...props }, label || children)
}
