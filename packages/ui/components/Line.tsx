interface LineProps {
  className?: string
  label?: string
}

export function Line({ className, label }: LineProps) {
  if (!label) return <hr className={`my-4 border-t-1 border-gray-line ${className || ''}`} />

  return (
    <div className={`flex items-center my-1 ${className || ''}`}>
      <div className="grow border-b border-gray-line" style={{ lineHeight: '0.1em' }}></div>
      <div className="px-2">{label}</div>
      <div className="grow border-b border-gray-line" style={{ lineHeight: '0.1em' }}></div>
    </div>
  )
}
