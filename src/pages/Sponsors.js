import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export const Sponsors = (props) => {
  const { description } = props


  return (
    <div data-testid="sponsors-test"><Typography variant="h5" align="center">This is the Sponsors page</Typography></div>
  )
}

export default Sponsors;
