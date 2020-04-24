import React from 'react'
import Grid from '@material-ui/core/Grid'
import { navigateToFaq } from '../../navigator/Navigator'
import { navigateToHome } from '../../navigator/Navigator'
import { navigateToGuides } from '../../navigator/Navigator'
import { navigateToSponsors } from '../../navigator/Navigator'
import { navigateToRoadmaps } from '../../navigator/Navigator'
import Button from '@material-ui/core/Button';

export const Navbar = (props) => {

    return (
      <div>
        <Grid container spacing = { 1 }>
          <Grid item xs = { 8 }>
          </Grid>
          <Grid item xs >
            <Button variant="contained" color="primary" onClick = { navigateToFaq } > FAQ</Button>
            <Button variant="contained" color="primary" onClick = { navigateToRoadmaps } >Roadmaps </Button>
            <Button variant="contained" color="primary" onClick = { navigateToGuides } > Guides</Button>
            <Button variant="contained" color="primary" onClick = { navigateToSponsors } > Sponsors</Button>
            <Button variant="contained" color="primary" onClick = { navigateToHome } > Home</Button>
          </Grid >
        </Grid>
      </div >
    )
}


export default Navbar;
