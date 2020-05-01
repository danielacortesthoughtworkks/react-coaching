import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export const Roadmaps = (props) => {
  const { description } = props


  return (
    <div data-testid="roadmaps-test"><Typography variant="h5" align="center">This is the Roadmaps page</Typography></div>
    
  )
}

export default Roadmaps;
