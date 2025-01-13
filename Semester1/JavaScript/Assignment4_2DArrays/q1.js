"use strict";
/*
Author: Callie Pretty
Assignment #: 4
Description: Altering text from a file
*/

//read file, add line numbers for output with for loop, any text over 20 chars converted to lower case
//any text 20 or less characters converted to uppercase, omit random line with math.random

const fs = require(`fs`);

//function to insert a random blank line into an array
function remLine(arr){
    const rand = (Math.random() * arr.length);
    arr.splice(rand, 1, "");
    return arr;
}

function main() // <-- Don't change this line!
{ 
const rawText = fs.readFileSync(`ateam_Original.txt`, `utf-8`); //read file
const lines = rawText.split("\r\n"); //split into lines to store in array
var alterLines = [];

console.log(`-------------------------\nOriginal Text\n-------------------------\n`);
console.log(rawText); //print original text
console.log(`-------------------------\nAltered Text\n-------------------------\n`);

for (var i = 0; i < lines.length; i++){
    if (lines[i].length > 20){
        alterLines.push(lines[i].toLowerCase()); // lines longer than 20 chars = lowercase
    }
    else {
        alterLines.push(lines[i].toUpperCase()); // lines less or equal to 20 chars = uppercase
    }
    }

remLine(alterLines); // removing random line

for (var i = 0; i < lines.length; i++){
    console.log(`${i + 1}: ${alterLines[i]}`);
}

fs.writeFileSync("ateam_New.txt", alterLines.join(`\n`)); // printing to new file

}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}
