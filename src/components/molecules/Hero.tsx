import Button from '../atoms/Button'

import Logo from './Logo'

interface HeroProps {
  title?: string
  subtitle?: string
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="text-center p-4 mb-4 md:mb-12">
      <Logo className="mx-auto mt-4 sm:mt-6 md:mt-12 lg:w-1/2 md:w-3/4" fill="#ffffff" />
      <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl">
        {subtitle || 'Open Source Community & Event Management'}
      </p>
      <div className="mt-5 md:mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
        <Button href="#" label="Browse Communities" />
        <Button href="#" label="Manage Your Community" />
      </div>
    </div>
  )
}
