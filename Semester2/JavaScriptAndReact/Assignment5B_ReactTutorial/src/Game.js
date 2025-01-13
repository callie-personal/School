import React, { useState } from 'react';
import Board from './Board';
import MoveCounter from './MoveCounter';
import { calculateWinner } from './App';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
    //set calculateWinner result to a variable
    const winner = calculateWinner(currentSquares);

    let resultText;
    if (winner === 'Draw'){
        resultText = 'Game Result: Draw!';
    } else if (winner) {
        //take the winner property from the calculateWinner function
        resultText = 'Game Result: ' + winner.winner + ' wins!';
    } else {
        resultText = '';
    }
    //time travel, jump to previous moves
    const moves = history.map((_, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className="game">
        <div className="game-board">

          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          {/* Passing the history prop to MoveCounter.js */}
          <MoveCounter history={history} currentMove={currentMove} />
        </div>
        <div className="game-info">
            <div className="status">{resultText}</div>
            
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  export default Game;