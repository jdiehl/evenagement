import Line from '../atoms/Line'

export default function MainFooter() {
  return (
    <footer className="container mx-auto">
      <Line />
      <p className="text-center text-base">
        <a className="transition-all text-primary hover:text-primary-dark hover:underline" href="https://github.com/jdiehl/evenagement" target="_blank" rel="noreferrer">Evenagement on GitHub</a>
      </p>
    </footer>
  )
}
