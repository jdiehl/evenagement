import { createMuiTheme } from '@material-ui/core/styles'
import getHours from 'date-fns/getHours'
// import red from '@material-ui/core/colors/red'

function paletteType() {
  const hours = getHours(new Date())
  if (hours < 6 || hours > 18) {
    return 'dark'
  }
  return 'light'
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
