function currentSelectionCorrect(puzzleData){
    let hasGreyCell = false;
    let colouredCellsCorrect = true;
    //iterate through the puzzleData
    for (let i = 0; i < puzzleData.length; i++) {
        for (let j = 0; j < puzzleData[i].length; j++) {
            const cell = puzzleData[i][j];
            //if the current state isn't grey (0)
            if (cell.currentState !== 0){
                //if the cell is not correct, equals false
                if (cell.currentState !== cell.correctState){
                    colouredCellsCorrect = false;
                }
            } else {
                //otherwise the cell is grey
                hasGreyCell = true;
            }
        }
    }
    if (colouredCellsCorrect && hasGreyCell){
        alert('So far so good!');
    } else if (colouredCellsCorrect && !hasGreyCell){
        alert('You did it!!');
    } else {
        alert('Something is wrong');
    }
}

export default currentSelectionCorrect;