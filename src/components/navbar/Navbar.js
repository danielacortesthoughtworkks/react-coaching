import React from 'react';
import { Navbarbutton } from './Navbarbutton'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';


export const Navbar = (props) => {

  return (
    <div>
    <Grid container spacing={1}>
      <Grid item xs = {8}>
      </Grid>
      <Grid item xs>
    <Navbarbutton content='Roadmaps'></Navbarbutton>
    <Navbarbutton content='Guides'></Navbarbutton>
    <Navbarbutton content='Sponsors'></Navbarbutton>
    <Navbarbutton content='FAQ'></Navbarbutton>
    <Navbarbutton content='Subscribe'></Navbarbutton>
    </Grid>
    </Grid>
    </div>
  )
}

export default Navbar;
