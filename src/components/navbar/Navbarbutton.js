import React from 'react';
import Button from '@material-ui/core/Button';

export const Navbarbutton = (props) => {
  const { content } = props

  return (
    <Button variant="contained" color="primary">{content}</Button>
  )
}

export default Navbarbutton;
