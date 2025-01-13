"use strict";
var readlineSync = require('readline-sync');

/*
Student Name:   [Enter name here]
Date:           [Enter date here]  
Program Title:  Baseball OBP Calculator - BROKEN
Description:    Debugging and conditionals practice
*/

function main() // <-- Don't change this line!
{   
	console.log("Baseball On-Base Percentage Calculator");
    console.log("\nThis program will calculate a baseball player's OBP based on");
    console.log("how many at-bats, hits, walks, hit by pitch, and sacrifice flies");
    console.log("they have had.\n");
    
    
	var atBats = readlineSync.question("Enter the number of at-bats: ");
	var hits = readlineSync.question("Enter the number of hits: ");
	var walks = readlineSync.question("Enter the number of walks: ");
	var hitByPitches = readlineSync.question("Enter the number of hit by pitches: ");
	var sacrificeFlies = readlineSync.question("Enter the number of sacrifice flies: ");
	
	
	var timesOnBase = hits + walks + hitByPitches;
	var totalAtBats = atBats + walks + hitByPitches + sacrificeFlies;
	
	var onBasePercentage = timesOnBase * totalAtBats;
	
	
	console.log(`\nThe player's OBP is ${onBasePercentage.toFixed(2)} for the year.`);

}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}