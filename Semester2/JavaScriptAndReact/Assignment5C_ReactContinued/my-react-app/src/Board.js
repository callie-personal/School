import React, { useState, useEffect } from 'react';

const PuzzleBoard = ({ apiUrl }) => {
  const [puzzleData, setPuzzleData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setPuzzleData(data.rows))
      .catch(error => console.error('Error fetching data:', error));
  }, [apiUrl]);

  const toggleState = (row, col) => {
    // Implement your toggleState logic here
    // This function should update the puzzleData state
  };

  const renderBoard = () => {
    return puzzleData.map((row, i) => (
      <tr key={i}>
        {row.map((cell, j) => (
          <td
            key={j}
            data-row={i}
            data-col={j}
            data-state={cell.currentState}
            data-toggle={cell.canToggle}
            onClick={() => toggleState(i, j)}
            className={`${
              cell.canToggle ? '' : 'noModify'
            } coloured-${cell.currentState}`}
          ></td>
        ))}
      </tr>
    ));
  };

  return (
    <table>
      <tbody>{renderBoard()}</tbody>
    </table>
  );
};

export default PuzzleBoard;