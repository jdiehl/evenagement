// import Image from 'next/image'

interface CoverImageProps {
  src: string
  alt: string
}

export default function CoverImage({ src, alt }: CoverImageProps) {
  return (
    // next/image does not work on M1:
    // <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  )
}
