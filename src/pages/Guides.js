import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export const Guides = (props) => {
  const { description } = props


  return (
    <div data-testid="guides-test"><Typography variant="h5" align="center">This is the Guides page</Typography></div>
  )
}

export default Guides;
