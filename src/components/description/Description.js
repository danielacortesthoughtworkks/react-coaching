import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export const Description = (props) => {
  const { description } = props


  return (
    <Typography variant="h5" align="center">{description}</Typography>
  )
}

export default Description;
