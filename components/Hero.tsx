interface HeroProps {
  title: string
  subtitle: string
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
      <div className="mt-5 md:mt-8 flex flex-col md:flex-row justify-center">
        <a href="#" className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 md:mr-4 mb-1" style={{ transition: 'all .15s ease' }}>
          Browse Communities
        </a>
        <a href="#" className="text-blue-600 bg-transparent border border-solid border-blue-600 hover:bg-blue-700 hover:text-white font-medium px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" style={{ transition: 'all .15s ease' }}>
          Manage Your Community
        </a>
      </div>
    </div>
  )
}
