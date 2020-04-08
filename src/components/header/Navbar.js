import React from 'react';
import { Navbarbutton } from './Navbarbutton'

export const Navbar = (props) => {
  const divStyle = {
  position: 'absolute',
  right: '10%',

  };

  return (
    <div style={divStyle}>
    <Navbarbutton content='Roadmaps'></Navbarbutton>
    <Navbarbutton content='Guides'></Navbarbutton>
    <Navbarbutton content='Sponsors'></Navbarbutton>
    <Navbarbutton content='FAQ'></Navbarbutton>
    <Navbarbutton content='Subscribe'></Navbarbutton>

</div>

  )
}

export default Navbar;
