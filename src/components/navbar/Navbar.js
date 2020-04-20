import React from 'react'
import { Navbarbutton } from './Navbarbutton'
import Grid from '@material-ui/core/Grid'
import { navigateToFaq } from '../../navigator/navigator'
import { navigateToHome } from '../../navigator/navigator'
import { navigateToGuides } from '../../navigator/navigator'
import { navigateToSponsors } from '../../navigator/navigator'
import { navigateToRoadmaps } from '../../navigator/navigator'

export const Navbar = (props) => {

    return (
      <div>
        <Grid container spacing = { 1 }>
          <Grid item xs = { 8 }>
          </Grid>
          <Grid item xs >
            <Navbarbutton content = 'FAQ' onClick = { navigateToFaq } > < /Navbarbutton>
            <Navbarbutton content = 'Roadmaps' onClick = { navigateToRoadmaps } > < /Navbarbutton>
            <Navbarbutton content = 'Guides' onClick = { navigateToGuides } > < /Navbarbutton>
            <Navbarbutton content = 'Sponsors' onClick = { navigateToSponsors } > < /Navbarbutton>
            <Navbarbutton content = 'Home' onClick = { navigateToHome } > < /Navbarbutton>
          </Grid >
        </Grid>
      </div >
    )
}


export default Navbar;
