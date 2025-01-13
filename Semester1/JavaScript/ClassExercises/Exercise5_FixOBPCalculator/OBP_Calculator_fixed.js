"use strict";
var readlineSync = require('readline-sync');

/*
Student Name:   Callie Pretty
Date:           Feb 19 2023 
Program Title:  Baseball OBP Calculator - BROKEN
Description:    Debugging and conditionals practice
*/

function main() // <-- Don't change this line!
{   
	console.log("Baseball On-Base Percentage Calculator");
    console.log("\nThis program will calculate a baseball player's OBP based on");
    console.log("how many at-bats, hits, walks, hit by pitch, and sacrifice flies");
    console.log("they have had.\n");
    
     //not parsing as int
	var atBats = parseInt(readlineSync.question("Enter the number of at-bats: "));
	var hits = parseInt(readlineSync.question("Enter the number of hits: "));
	var walks = parseInt(readlineSync.question("Enter the number of walks: "));
	var hitByPitches = parseInt(readlineSync.question("Enter the number of hit by pitches: "));
	var sacrificeFlies = parseInt(readlineSync.question("Enter the number of sacrifice flies: "));
	
	
	var timesOnBase = hits + walks + hitByPitches;
	var totalAtBats = atBats + walks + hitByPitches + sacrificeFlies;
	//Wrong equation
	var onBasePercentage = timesOnBase / totalAtBats;
	
	//Wrong number of decimals
	console.log(`\nThe player's OBP is ${onBasePercentage.toFixed(3)} for the year.`);
//add congratulatory statement
if (onBasePercentage > 0.482) {console.log(`Congratulations for setting a record pace!`)}
}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}
