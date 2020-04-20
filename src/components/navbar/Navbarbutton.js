import React from 'react';
import Button from '@material-ui/core/Button';

export const Navbarbutton = (props) => {
  const { content, onClick } = props

  return (
    <Button onClick={onClick}variant="contained" color="primary">{content}</Button>
  )
}

export default Navbarbutton;
