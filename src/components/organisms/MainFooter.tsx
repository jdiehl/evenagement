
export default function MainFooter({ useTransparentBackground }: { useTransparentBackground?: boolean }) {
  return (
    <div className={'py-12 ' + (useTransparentBackground ? 'bg-background-shaded' : 'bg-background-dark')}>
      <footer className="container flex items-center mx-auto">
        <div className={'grid grid-cols-3 gap-4 text-sm w-1/2 mx-auto text-center ' + (useTransparentBackground ? 'text-white hover:text-gray-100' : 'text-primary hover:text-primary-dark')}>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">About</a>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">API</a>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">Imprint</a>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">Pricing</a>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">Status</a>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">Terms</a>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">Get in Touch</a>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">Source</a>
          <a className="transition-all hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">Privacy</a>
        </div>
      </footer>
    </div>
  )
}
