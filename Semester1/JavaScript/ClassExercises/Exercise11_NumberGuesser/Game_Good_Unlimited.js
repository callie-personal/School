"use strict";
/*
	Author: Callie Pretty
	Date: February 21 2023
	Description: User has 10 guesses to guess a randomly generated number between 1-100
*/
var input = require('readline-sync');

console.log("Welcome to my game!");

var chances = 10;
var num = Math.floor(Math.random() * (100 - 1) + 1);
var attempts = 0;

while (attempts < 10){
    var guess = parseInt(input.question("Enter a number between 1 and 100: "));
    if (guess < num){
        console.log("Higher!");
    }

    else if (guess > num){
        console.log("Lower!");
    }

    else if (guess == num){
        console.log("You got it!");
        break;
    }
    attempts++;
}
/*
for(var i = 0; i < chances; i++)
{
	var guess = parseInt(readlineSync.question("Enter a number: "));
	
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
*/

console.log("Game Over");
