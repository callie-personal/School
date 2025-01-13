import React from 'react';
import Square from './Square';


//squares and toggleState as props for Board component
const Board = ({ squares, toggleState }) => (
  <div>
    {/* Map each row in th e squares array */}
    {squares.map((row, rowIndex) => (
      <div key={rowIndex}>
        {/* Map through each square in current row */}
        {row.map((square, colIndex) => (
            //Rendering the square with the needed props
          <Square
            key={colIndex}
            value={square}
            toggleState={toggleState}
            row={rowIndex}
            col={colIndex}
            text={square.text}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Board;