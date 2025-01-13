"use strict";
var readlineSync = require('readline-sync');

console.log("Welcome to my game!");

var n = 10;
var t = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

for(var i = 0; i < n; i++)
{
	var g = parseInt(readlineSync.question("Enter a number: "));
	
	if (g < t)
	{
		console.log("Higher");
	} 
	else if (g > t)
	{
		console.log("Lower");
	} 
	else if (g == t)
	{
		console.log("You got it!");
		break;
	}
}

console.log("Game Over");
