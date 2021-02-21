import { createMuiTheme } from '@material-ui/core/styles'
import getHours from 'date-fns/getHours'
// import red from '@material-ui/core/colors/red'

function paletteType() {
  // return 'dark'
  if (typeof matchMedia === 'function') {
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  const hours = getHours(new Date())
  return (hours < 6 || hours > 18) ? 'dark' : 'light'
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: paletteType(),
  },
  // palette: {
  //   primary: {
  //     main: '#556cd6',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  //   background: {
  //     default: '#fff',
  //   },
  // },
})

export default theme
