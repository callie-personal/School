let numArray = [1, 2, 3, 6, 9, 34, 2, 6];
let tempArray = [];
let consecutiveArray = [];

//for loop to run through the array
for (let i = 0; i < numArray.length - 1; i++){
//checking the index with the previous index to see if it's incremental
    if (i === 0 || numArray[i] === numArray[i - 1] + 1){
//if incremental, push the consecutive numbers into a temporary 2D array
        tempArray.push(numArray[i]);
    }
//if not consecutive, move to the next index
    else{
//if the array is longer than a single digit, move to the next index
        if (tempArray.length > 1){
        consecutiveArray.push(tempArray);
//reset the temporary array to contain the current number
    }
        tempArray = [numArray[i]];
    }
}
//pushing the final grouping.
consecutiveArray.push(tempArray);

//goes over the array and removes any indexes of length 0
consecutiveArray = consecutiveArray.filter(element => element.length !== 0);



//function to create an array of sums from a 2D array
function findSum(array){
    let sums = [];
//for loop to check the rows of an array
    for (let i = 0; i < array.length; i++){
        let rowSum = 0;
//for loop to check the columns of an array
        for (let j = 0; j < array[i].length; j++){
//get the sums of the colummn and add it to a blank array, then move to the next index
            rowSum += array[i][j];
        }
//push the rowSum variable back in to the sums array
        sums.push(rowSum);
    }
    return sums;
}

//function to find the highest number in a 1D array
function findHighest(array){
    let highest = 0;
//go through the array indexes
    for (let i = 0; i < array.length; i++){
//if the index number is higher, then store the index value in a variable
        if (array[i] > highest){
            highest = array[i];
        }
    }
    return highest;
}

let sumArray = findSum(consecutiveArray);

console.log(findHighest(sumArray));