
import React from 'react';
import { Title } from './Title'
import { Description } from './Description'
import { Navbar } from './Navbar'

export const Header = (props) => {
  return (
    <div>
    <Navbar />
    <Title title='Developer Roadmaps'></Title>
    <Description description='Community driven roadmaps, articles and resources for developers. Sign up for occasional updates on new roadmaps, updates and guides'></Description>
    </div>
  )
}

export default Header;
