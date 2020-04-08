import React from 'react';

export const Title = (props) => {
  const { title } = props

  const divStyle = {
  width: '500px',
  position: 'absolute',
  left: '50%',
  right: '50%',
  transform: 'translate(-50%, 300%)'
  };

  return (
    <div style={divStyle}>
    <h1>{title}</h1>
    </div>
  )
}

export default Title;
