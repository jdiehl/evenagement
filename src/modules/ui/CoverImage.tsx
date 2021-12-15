import Image from 'next/image'

interface CoverImageProps {
  src: string
  alt: string
}

export default function CoverImage({ src, alt }: CoverImageProps) {
  if (!src) return null
  return (
    <Image src={src} alt={alt} layout="fill" objectFit="cover" />
  )
}
