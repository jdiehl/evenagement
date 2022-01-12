import { PropsWithChildren } from 'react'

type TextType = 'p' | 'h1' | 'h2'
type TextSize = 'xl' | 'l' | 'm' | 's'
type TextAlign = 'left' | 'center' | 'right' | 'justify'
type TextColor = 'white' | 'black' | 'gray' | 'primary'
interface TextProps {
  type?: TextType
  size?: TextSize
  margin?: number
  align?: TextAlign
  className?: String
  color?: TextColor
}

function defaultSize(type: TextType) {
  switch (type) {
    case 'p': return 'm'
    case 'h1': return 'xl'
    case 'h2': return 'l'
  }
}

function sizeClass(size: TextSize) {
  switch (size) {
    case 'xl': return 'font-bold text-2xl'
    case 'l': return 'font-bold text-base'
    case 'm': return 'text-base'
    case 's': return 'text-xs'
  }
}

function defaultMargin(type: TextType) {
  switch (type) {
    case 'p': return 0
    case 'h1': return 4
    case 'h2': return 2
  }
}

export function Text({ children, type = 'p', size, margin, align, color, className }: PropsWithChildren<TextProps>) {
  size = size ?? defaultSize(type)
  margin = margin ?? defaultMargin(type)
  const props = { className: className + ' ' + sizeClass(size) + ` my-${margin}` + (align ? ` text-${align}` : '')  + (color ? ` text-${color}` : '') }
  switch (type) {
    case 'p': return <p {...props}>{children}</p>
    case 'h1': return <h1 {...props}>{children}</h1>
    case 'h2': return <h2 {...props}>{children}</h2>
  }
}
