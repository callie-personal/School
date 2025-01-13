import React from 'react';

const Square = ({ value, toggleState, row, col, text }) => {
  const handleSquareClick = () => {
    toggleState({ row, col });
  };

  return (
    <div
      onClick={handleSquareClick}
      style={{
        width: '30px',
        height: '30px',
        border: '1px solid #ccc',
        display: 'inline-block',
        textAlign: 'center',
        backgroundColor: value.currentState === 0 ? 'grey' : value.currentState === 1 ? 'white' : 'blue',
      }}
      data-toggle={value.canToggle}
      data-state={value.currentState}
      data-row={row}
      data-col={col}
    >
      {text}
    </div>
  );
};

export default Square;