import { SVGProps } from 'react'

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M 256 16 C 388.548 16 496 123.452 496 256 C 496 388.548 388.548 496 256 496 C 123.452 496 16 388.548 16 256 C 16 123.452 123.452 16 256 16 Z" fill="rgb(48, 102, 190)"></path>
      <path d="M 410.169 187.493 C 404.037 190.087 190 256 190 256 C 190 256 404.037 321.913 410.169 324.507" fill="transparent" strokeWidth="48" stroke="hsl(0, 0%, 100%)" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M 349.93 395.308 C 340.993 401.346 331.443 406.547 321.393 410.798 C 301.294 419.299 279.196 424 256 424 C 163.216 424 88 348.784 88 256 C 88 163.216 163.216 88 256 88 C 279.196 88 301.294 92.701 321.393 101.202 C 331.443 105.453 340.993 110.654 349.93 116.692" fill="transparent" strokeWidth="48" stroke="hsl(0, 0%, 100%)" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>)
}
