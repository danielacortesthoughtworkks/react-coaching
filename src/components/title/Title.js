import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export const Title = (props) => {
  const { title } = props

  return (
    
    <Typography variant="h1" align="center">{title}</Typography>
  )
}

export default Title;
