"use strict"
var readlineSync = require(readline-sync);

var lastname = readlineSync.question("Please enter the student's last name: ");
        
var assignedHouse = assignHouse(lastname);
if (assignedHouse!="na"){
    console.log(`You are going to .... ${assignedHouse}`);
}else{
    console.log(`You're a muggle, how did you get on the train in the first place?`);
}

function assignHouse(paramName){ //the paramName is only used within this function, we can name it differently
var assignedHouse="";
if (paramName == "Potter"){//Check if the last name is Potter, if it is, assign to Gryffindor
assignedHouse = "Gryffindor";
}else if (paramName == "Malfoy"){//Check if the last name is Malfoy, if it is, assign to Slytherin
assignedHouse = "Slytherin";
}else{
//generate a random number between 0 and 1
//if it is 0, continue, else they are muggles

//Else, generate a random number from 1 - 4
var randomNum = parseInt(Math.random()*8)+1; //generate 1 - 8
if (randomNum == 1){//if random number == 1, assign to Gryffindor
    assignedHouse = "Gryffindor";
}else if (randomNum == 2){//if random number == 2, assign to Hufflepuff
    assignedHouse = "Hufflepuff";
}else if (randomNum == 3){//if random number == 3, assign to Ravenclaw
    assignedHouse = "Ravenclaw";
}else if (randomNum == 4){
    assignedHouse = "Slytherin";
}else{
    assignedHouse = "na"; //50% chance
}
}
return assignedHouse;
}
// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
main();