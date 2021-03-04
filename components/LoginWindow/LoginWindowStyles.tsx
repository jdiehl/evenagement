import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  loginWindow: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    'border-radius': '15px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 0, 1),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden'
  },
  loginWindowContentWrapper: {
    display: 'flex',
    'flex-direction': 'row',
    transition: '.5s ease-in-out'
  },
  signup: {
    transform: 'translateX(-400px)'
  },
  emailVerification: {
    transform: 'translateX(-800px)'
  },
  login: {
    transform: 'translateX(0)'
  },
  loginWindowContent: {
    width: '100%',
    display: 'flex',
    padding: theme.spacing(0, 4, 0),
    flex: 'none',
    'flex-direction': 'column',
    'align-content': 'center',
    '& > *': {
      margin: theme.spacing(0, 0, 2)
    }
  },
  emailVerificationGrid: {
    height: '90%'
  },
  emailVerificationIcon: {
    fontSize: '10rem'
  }
}), {
  index: 10
})

export default useStyles
