import { Children, PropsWithChildren } from 'react'
import Grid from '@material-ui/core/Grid'

export default function CommunityGrid({ children }: PropsWithChildren<{}>) {
  return (
    <Grid container spacing={1}>
      {Children.map(children, child => (
        <Grid item md={4} sm={6} xs={12}>
          {child}
        </Grid>
      ))}
    </Grid>
  )
}
