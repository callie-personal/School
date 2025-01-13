(() =>{

    // const apiUrl = "https://prog2700.onrender.com/threeinarow/sample"
    // const apiUrl = "https://prog2700.onrender.com/threeinarow/random"
    // const apiUrl = "https://prog2700.onrender.com/threeinarow/6x6"
    // const apiUrl = "https://prog2700.onrender.com/threeinarow/8x8"
    // const apiUrl = "https://prog2700.onrender.com/threeinarow/10x10"
    // const apiUrl = "https://prog2700.onrender.com/threeinarow/12x12"
    // const apiUrl = "https://prog2700.onrender.com/threeinarow/14x14"
    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {

        const puzzleData = data.rows;
        //creating a table element  
        const puzzleTable = document.createElement('table');
        //adding it to the html body
        document.body.appendChild(puzzleTable);

        
        //iterate through 2D Array puzzleData to get the rows 'tr' and cells 'td'
        //so display first row, then  2nd, then however many the API requests
        for (let i = 0; i < puzzleData.length; i++){
            const row = document.createElement('tr');
            for (let j = 0; j < puzzleData[i].length; j++){
                //creating the cells
                const cell = document.createElement('td');
                //shows as <td data-row></td> or <td data-col></td>
                cell.dataset.row = i;
                cell.dataset.col = j;
                
                //when a cell is clicked, toggle the current state
                cell.addEventListener('click', toggleState);

                row.appendChild(cell);
                //setting the initial board colours
                const initialState = puzzleData[i][j].currentState;
                cell.dataset.state = initialState;
                cell.dataset.toggle = puzzleData[i][j].canToggle;
                //rule to set the initial(unmodifiable) cells to have a red border
                if(cell.dataset.toggle === 'false'){
                    cell.classList.add('noModify');
                }
                //if 1, set to grey
                if (initialState === 1){
                    cell.classList.add('coloured-1');
                //if 2, set to blue
                } else if (initialState === 2){
                    cell.classList.add('coloured-2');
                //if 0, set to white
                } else if (initialState === 0){
                    cell.classList.add('coloured-0');
                }
                
            }
            //create the next row in the sequence
            puzzleTable.appendChild(row);
        }

        //creating a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'showIncorrectCells';
                
        //event listener to run the show incorrect function when it changes
        checkbox.addEventListener('change', showIncorrect);
        document.body.appendChild(checkbox);
        //add text after the checkbox
        const checkboxText = document.createTextNode('Show Incorrect Cells');
        document.body.appendChild(checkboxText);

        //a button to check if the puzzle is correct, partially correct or incorrect by running 
        //currentSelectionCorrect function
        const checkButton = document.createElement('button');
        checkButton.textContent = 'Check Puzzle';
        checkButton.addEventListener('click', () => currentSelectionCorrect(puzzleData));
        //add a line break to the button will be under the checkbox
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(checkButton);

        //a button to complete the puzzle
        const solveButton = document.createElement('button');
        solveButton.textContent = 'Complete Puzzle';
        solveButton.addEventListener('click', () => solvePuzzle());
        //add a line break to the button will be under the checkbox
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(solveButton);
    
    function toggleState(event) {
        //target of the click
        const cell = event.target;
        //extract an int from the data-state portion
        const currentState = parseInt(cell.dataset.state) || 0;
        //checking if the cell is toggleable
        const canToggle = cell.dataset.toggle === "true";
        //cycle through the 3 states, reset every 3rd
        const newState = (currentState + 1) % 3;
        
        // Update cell state
        cell.dataset.state = newState;
            if (canToggle){
                // Remove all color classes
                cell.classList.remove('coloured-0', 'coloured-1', 'coloured-2');
                // Add color class based on the new state
                cell.classList.add(`coloured-${newState}`);
                //grab the row/col #'s of the clicked cell
                const row = parseInt(cell.dataset.row);
                const col = parseInt(cell.dataset.col);
                //update the current state to match the selected colour, for later checking
                puzzleData[row][col].currentState = newState;
            
            }
        }

    function showIncorrect(){
        const checkbox = document.getElementById('showIncorrectCells');
        //if checkbox is
        const boxChecked = checkbox.checked;
        //iterate through the table rows
        for (let i = 0; i < puzzleTable.rows.length; i++) {
            const row = puzzleTable.rows[i];
            //iterate through the table cells(columns)
            for (let j = 0; j < row.cells.length; j++) {
                const cell = row.cells[j];
                const currentState = puzzleData[i][j].currentState;
                const correctState = puzzleData[i][j].correctState;
                const canToggle = puzzleData[i][j].canToggle;
                //if the box is not grey, and it's also incorrect, display an X
                if (currentState !== 0 && currentState !== correctState && canToggle){ 
                //if the box is checked, insert an X in the cell
                    cell.textContent = boxChecked ? 'X' : '';
                } else {
                    cell.textContent = '';
                }
            }
        }
    }
    //repurposed showIncorrect function
    function solvePuzzle(){
        //iterate through the table rows
        for (let i = 0; i < puzzleTable.rows.length; i++) {
            const row = puzzleTable.rows[i];
            //iterate through the table cells(columns)
            for (let j = 0; j < row.cells.length; j++) {
                const cell = row.cells[j];
                const currentState = puzzleData[i][j].currentState;
                const correctState = puzzleData[i][j].correctState;
                const canToggle = puzzleData[i][j].canToggle;
                //if the box does nto equal the correct state and you can toggle it
                if (currentState !== correctState && canToggle){ 
                //make the currentstate = the correct state
                    puzzleData[i][j].currentState = correctState;
                    //remove current cell colour
                    cell.classList.remove('coloured-0', 'coloured-1', 'coloured-2');
                    //change to correct cell colour
                    cell.classList.add(`coloured-${correctState}`);
                    //remove any X's left over if you used the checkbox first
                    cell.textContent = '';
                }
            }
        }
    }

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
    })
    //error checking for API call
    .catch(error => console.error('Error fetching puzzle data: ', error))

})();