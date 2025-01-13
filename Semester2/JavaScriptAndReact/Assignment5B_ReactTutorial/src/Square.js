import React from 'react';

function Square({ value, onSquareClick, isWinnerSquare }) {
    return (
      //if it's a winning square, add the winner attribute for CSS styling to highlight
      <button className={`square ${isWinnerSquare ? 'winner' : ''}`} onClick={onSquareClick}>
      {value}
      </button>
    );
  }

  export default Square;