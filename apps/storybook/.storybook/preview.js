import * as NextImage from "next/image"
import 'styles/styles.css'

// replace disable next/image optimizations
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color|fill|stroke)$/i,
      date: /(^date$|Date$)/
    }
  }
}
