"use strict";
/*
	Author: Callie Pretty
	Date: February 21 2023
	Description: User has 10 guesses to guess a randomly generated number between 1-100
*/
var input = require('readline-sync');
var num = Math.floor(Math.random() * (100 - 1) + 1);
var chances = 10;

console.log("Welcome to my game!");

for(var i = 0; i < chances; i++)
{
    var guess = parseInt(input.question("Enter a number: "));
	
	if (guess < num)
	{
		console.log("Higher");
	} 
	else if (guess > num)
	{
		console.log("Lower");
	} 
	else if (guess == num)
	{
		console.log("You got it!");
		break;
	}
    
}


console.log("Game Over");
