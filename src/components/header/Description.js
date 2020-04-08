import React from 'react';

export const Description = (props) => {
  const { description } = props
  const divStyle = {
  width: '700px',
  position: 'absolute',
  left: '50%',
  right: '50%',
  transform: 'translate(-50%, 500%)'
  };

  return (

    <div style={divStyle}>
    <h5>{description}</h5>
    </div>
  )
}

export default Description;
