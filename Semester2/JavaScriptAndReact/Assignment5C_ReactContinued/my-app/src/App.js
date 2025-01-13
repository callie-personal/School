import React, { useState, useEffect } from 'react';
import Board from './Board';
import Square from './Square';

const Puzzle = () => {
  //creating state variable puzzleData and it's setter function setPuzzleData
  const [puzzleData, setPuzzleData] = useState([]);
  //fetching API data
  useEffect(() => {
    const apiUrl = "https://prog2700.onrender.com/threeinarow/sample";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const puzzleData = data.rows;
        setPuzzleData(puzzleData);
      })
      .catch(error => console.error('Error fetching puzzle data: ', error));
  }, []);

  //function to toggle the state between 0,1,2
  const toggleState = ({ row, col }) => {
    setPuzzleData((testData) => {
      //copy a new array based on the input array (data)
      const cellData = [...testData];
      const canToggle = cellData[row][col].canToggle;
      if (canToggle){
      //take the cell's current state, then add 1 to it to cycle through 0,1,2
          cellData[row][col].currentState = (cellData[row][col].currentState + 1) % 3;
      }
      return cellData;
      }
    )};

  return (
    <div>
      <Board squares={puzzleData} toggleState={toggleState}/>
      <button onClick={""} >Show Incorrect</button>
    </div>
  );
};

export default Puzzle;
