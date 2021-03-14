import Button from '../atoms/Button'

interface HeroProps {
  title?: string
  subtitle?: string
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="text-center mb-4 md:mb-12">
      <h1 className="mt-4 sm:mt-6 md:mt-12 text-4xl sm:text-5xl md:text-6xl tracking-tight font-thin text-gray-900">
        {title || 'Evenagement'}
      </h1>
      <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-500">
        {subtitle || 'Open Source Community & Event Management'}
      </p>
      <div className="mt-5 md:mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
        <Button href="#" label="Browse Communities" />
        <Button href="#" type="outline" label="Manage Your Community" />
      </div>
    </div>
  )
}
