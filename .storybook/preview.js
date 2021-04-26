import '../src/styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color|fill|stroke)$/i,
      date: /Date$/
    }
  }
}
