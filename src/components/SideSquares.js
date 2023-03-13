import React from 'react';
import Square from './Square';
import '../styles/side-squares.css';

function SideSquares() {
  const colors = [
    '#7FF235',
    '#044AFB',
    '#E93F33',
    '#1C0D3D',
    '#F1963F',
    '#3E49F5'
  ];

  return (
    <div className='side-squares'>
      {colors.map(
        (color, index) => (
          <Square
            key={ index }
            style={{ backgroundColor: color }}
          />
        )
      )}
    </div>
  );
}

export default SideSquares;
