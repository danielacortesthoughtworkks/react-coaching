
import React from 'react';
import { Title } from '../title/Title'
import { Description } from '../description/Description'
import { Navbar } from '../navbar/Navbar'
import Grid from '@material-ui/core/Grid';

export const Header = (props) => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs>
        </Grid>
        <Grid item xs={9}>
          <Title title='Developer Roadmaps'></Title>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <Description description='Community driven roadmaps, articles and resources for developers. Sign up for occasional updates on new roadmaps, updates and guides'></Description>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>

    </div>
  )
}

export default Header;
