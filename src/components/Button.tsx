import Link from 'next/link'
import { MouseEventHandler, PropsWithChildren } from 'react'

type ButtonType = 'fill' | 'outline' | 'underline'

interface ButtonProps {
  tag?: 'a' | 'button' | 'input'
  label?: string
  type?: ButtonType
  round?: boolean
  href?: string
  className?: string
  onClick?: MouseEventHandler
}

function extraStylesForType(type: ButtonType) {
  switch (type) {
    case 'fill': return 'text-white bg-primary hover:bg-primary-light border border-transparent'
    case 'outline': return 'text-primary hover:text-white bg-transparent hover:bg-primary-light border border-solid border-primary hover:border-primary-light'
  }
}

function stylesForType(type: ButtonType, round: boolean) {
  if (type === 'underline') {
    return 'underline'
  }
  let styles = 'transition-all inline-block select-none text-center text-base font-medium rounded shadow hover:shadow-lg outline-none focus:outline-none cursor-pointer'
  if (round) {
    styles += ' text-2xl rounded-full shadow-xl p-2'
  } else {
    styles += ' px-6 py-1'
  }
  return styles + ' ' + extraStylesForType(type)
}

function makeButton(tag, label, props, children) {
  switch (tag || 'a') {
    case 'a': return <a {...props}>{label || children}</a>
    case 'button': return <button {...props}>{label || children}</button>
    case 'input': return <input type="submit" value={label} {...props} />
  }
}

export default function Button({ children, label, type, tag, round, href, ...props }: PropsWithChildren<ButtonProps>) {
  props.className = stylesForType(type ?? 'fill', round) + (props.className ? ` ${props.className}` : '')
  const button = makeButton(tag, label, props, children)
  if (href) {
    return <Link href={href}>{button}</Link>
  }
  return button
}
