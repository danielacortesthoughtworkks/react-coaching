import React from 'react';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

export const Faq = (props) => {
  const { description } = props


  return (
    <div data-testid="faq-test">
      <Typography variant="h5" align="center">FAQ</Typography>
      <p>This is the FAQ page</p>
    </div>

  )
}

export default Faq;
