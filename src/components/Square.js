import React from 'react';
import '../styles/square.css';

function Square(props) {
  return (
    <div
      className='square'
      style={ props.style }
    >
    </div>
  );
}

export default Square;
