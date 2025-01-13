"use strict";
var fs = require('fs'); //include file system library
function main()
{
/*
Student Name:	Callie Pretty
Description:	PROG1700 Ex 14 - read text from a file and shift letters with a random offset value
				i.e. ABCZ
				offset = 1
				BCDA
*/

var offset = Math.floor(Math.random() * (25 - 1 + 1)) + 1; //generates 0 - 25, 26 different values
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
		  't','u','v','w','x','y','z'];
var punctuation = [' ', '.',',']; //punctuation
var fileRead = "test_file.txt"; //file read
var fileWrite = "processed.txt"; //file write
var encode = "utf-8"; //encoding of the file
var outputMessage = "";

var inputMessage = fs.readFileSync(fileRead,encode); //read the file and store in a variable as an array

for(var i = 0; i < inputMessage.length; i++)
{
	if(punctuation.includes(inputMessage[i])) //im[i] represents each letter
	{
		outputMessage += inputMessage[i];
	}
	else 
	{
		var alphabetIndex = letters.indexOf(inputMessage[i].toLowerCase()); //alphabet index
		var newAlphabetIndex = (alphabetIndex + offset) % 26; //new index
		
		if(inputMessage[i].toUpperCase() == inputMessage[i]) //checking if the original letter is uppercase
		{
			outputMessage += letters[newAlphabetIndex].toUpperCase(); //if so, convert the alphabet to uppercase with the shifted letter
		}
		else
		{
			outputMessage += letters[newAlphabetIndex]; //keep it a lowercase with the shifted letter
		}
	}	
}
fs.writeFileSync(fileWrite, outputMessage, encode)
console.log(outputMessage); //print out the output message
}

if (require.main === module){
	main();
}