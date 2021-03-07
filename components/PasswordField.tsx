import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { useState, ChangeEvent } from 'react'

interface PasswordFieldProps {
  password: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  label: string
  tabIndex?: number
}

export default function PasswordField(props: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={props.password}
        onChange={props.onChange}
        inputProps={{ tabIndex: props.tabIndex || 0 }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={ () => setShowPassword(!showPassword) }
              onMouseDown={ (ev) => ev.preventDefault() }
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  )
}
