import React from 'react';

const MoveCounter = ({ history, currentMove }) => {
    //function to track move counts for X and O
    const calcMoveCounts = () => {
        const moveCounts = {
            X: 0,
            O: 0,
        };

        for (let i = 1; i <= currentMove; i++){
            const squares = history[i];
            //determine current player based on move number
            const currentPlayer = i % 2 === 0 ? 'O' : 'X';
            //if squares exist on current move, increment the move count for current player
            if (squares) {
                moveCounts[currentPlayer]++;
            }
        }
        return moveCounts;
    };
    //extracting X and O from the object returned by calcMoveCounts()
    const { X: xMoveCount, O: oMoveCount } = calcMoveCounts();
    //display the move counts
    return (
        <div>
            <p>X Move Count : {xMoveCount}</p>
            <p>O Move Count: {oMoveCount}</p>
        </div>
    );
};

export default MoveCounter;