import { ChangeEventHandler, MouseEventHandler, PropsWithChildren } from 'react'

type ButtonType = 'fill' | 'outline'

interface ButtonProps {
  tag?: 'a' | 'button' | 'input'
  label?: string
  type?: ButtonType
  round?: boolean
  href?: string
  className?: string
  onClick?: MouseEventHandler
  onChange?: ChangeEventHandler<HTMLInputElement>
}

function extraStylesForType(type: ButtonType) {
  switch (type) {
    case 'fill': return 'text-white bg-primary hover:bg-primary-light border border-transparent'
    case 'outline': return 'text-primary hover:text-white bg-transparent hover:bg-primary-light border border-solid border-primary hover:border-primary-light'
  }
}

function stylesForType(type: ButtonType) {
  const styles = 'transition-all inline-block select-none text-center text-base font-medium rounded shadow hover:shadow-lg outline-none focus:outline-none cursor-pointer'
  return styles + ' ' + extraStylesForType(type)
}

export default function Button({ children, label, type, tag, round, onChange, ...props }: PropsWithChildren<ButtonProps>) {
  props.className = stylesForType(type || 'fill') + (props.className ? ` ${props.className}` : '')

  // button is round
  if (round) {
    props.className += ' rounded-full shadow-xl w-10 h-10 flex justify-center items-center text-2xl'
  } else {
    props.className += ' px-6 py-1'
  }

  switch (tag || 'a') {
    case 'a': return <a {...props}>{label || children}</a>
    case 'button': return <button {...props}>{label || children}</button>
    case 'input': return <input type="submit" value={label} {...props} />
  }
}
