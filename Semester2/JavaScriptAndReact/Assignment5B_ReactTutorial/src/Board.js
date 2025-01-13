import React from 'react';
import Square from './Square';
import { calculateWinner } from './App';

function Board({ xIsNext, squares, onPlay }) {
    //Calculate the winner/winning squares using calculateWinner function
    const result = calculateWinner(squares);
    const winner = result ? result.winner : null;
    const winningSquares = result ? result.winningSquares : [];

    function handleClick(i) {
        //check if there's a winner or if the square is filled
      if (winner || squares[i]) {
        return;
      }

      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
  
    return (
      <>
      {/*Display either the winner, or next player*/}
    {winner ? (
      <div className="status">{`Winner: ${winner}`}</div>
    ) : (
      <div className="status">{`Next player: ${xIsNext ? 'X' : 'O'}`}</div>
    )}
    {/*Added isWinnerSquare to detect the winning squares and connect to the CSS style to highlight*/}
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} isWinnerSquare={winningSquares.includes(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} isWinnerSquare={winningSquares.includes(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} isWinnerSquare={winningSquares.includes(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} isWinnerSquare={winningSquares.includes(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} isWinnerSquare={winningSquares.includes(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} isWinnerSquare={winningSquares.includes(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} isWinnerSquare={winningSquares.includes(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} isWinnerSquare={winningSquares.includes(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} isWinnerSquare={winningSquares.includes(8)} />
        </div>
      </>
    );
  }

  export default Board;