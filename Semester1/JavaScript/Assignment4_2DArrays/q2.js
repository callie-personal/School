"use strict";
/*
Author: Callie Pretty
Assignment #:4
Description: MADLIBS game, inserting strings into blank spots
*/
// read a file and store in variable
// make a 2D array with the choice options
// take user input for each choice, adding a letter to the beginning
// convert input to a number to pull from 2D array index
// replace "_1_"etc. with replaceall with the inputs

var fs = require('fs');
var rs = require(`readline-sync`);

function convert(input){ //converts the input from a letter to a number for indexing
    let output = 0
    if (input = "a"){
        output = 1;
    }
    else if (input = "b"){
        output = 2;
    }
    else if (input = "c"){
        output = 3;
    }
    else if (input = "d"){
        output = 4;
    }
    else if (input = "e"){
        output = 5;
    }
    return output;
}

function choices(){

    var choicesFile = fs.readFileSync('the_choices_file.csv', 'utf-8');
    const textArray = choicesFile.split("\r\n"); //break file into lines

    for(var i = 0; i < textArray.length; i++){
        textArray[i] = textArray[i].split(","); //seperate CSV file
    }
    return textArray;
}

function verify(input){ // error checking function
    let isTrue = false;
    if (input != "a" && input != "b" && input != "c" && input != "d" && input != "e"){
        isTrue = false;
    }
    else {
        isTrue = true;
    }
        return isTrue;    
}

function main() // <-- Don't change this line!
{ 
 let storyFile = fs.readFileSync(`the_story_file.txt`, `utf-8`);
 let replaceFile = "";
 let alphabet = new Array("a", "b", "c", "d", "e");
 let animalChoice = "";
 let actionChoice = "";
 let adjectiveChoice = "";
 let actionChoice2 = "";
 let nounChoice = "";
 let actionChoice3 = "";
 let adverbChoice = "";

 console.log("The Itsy Bitsy Aardvark");
 console.log();
 console.log(`Please choose an animal name:\n`)

 for (var i = 0; i < alphabet.length; i++){
    console.log(`${alphabet[i]}) ${choices()[0][i + 1]}`); // display the choices for animals
 }

    animalChoice = rs.question(`Enter choice (a-e): `);
while (verify(animalChoice) != true){
    animalChoice = rs.question(`Enter choice (a-e): `);
}
    animalChoice = choices()[0][convert(animalChoice)];

 console.log()
 console.log(`Please choose an action word ending in 'ed':\n`)

for (var i = 0; i < alphabet.length; i++){
    console.log(`${alphabet[i]}) ${choices()[1][i + 1]}`) // display the choices for first action
}
    actionChoice = rs.question(`Enter choice (a-e): `);

while (verify(actionChoice) != true){
    actionChoice = rs.question(`Enter choice (a-e): `);
}
    actionChoice = choices()[1][convert(actionChoice)];


console.log()
console.log(`Please choose an an adjective:\n`)
   
for (var i = 0; i < alphabet.length; i++){
    console.log(`${alphabet[i]}) ${choices()[2][i + 1]}`) // display the choices for adjectives
}
    adjectiveChoice = rs.question(`Enter choice (a-e): `);

while (verify(adjectiveChoice) != true){
    adjectiveChoice = rs.question(`Enter choice (a-e): `);
}

    adjectiveChoice = choices()[2][convert(adjectiveChoice)];

console.log()
console.log(`Please choose another action word ending in 'ed':\n`)
       
for (var i = 0; i < alphabet.length; i++){
    console.log(`${alphabet[i]}) ${choices()[3][i + 1]}`) // display the choices for second action
}
    actionChoice2 = rs.question(`Enter choice (a-e): `);
    
while (verify(actionChoice2) != true){
    actionChoice2 = rs.question(`Enter choice (a-e): `);
}

    actionChoice2 = choices()[3][convert(actionChoice2)];

console.log()
console.log(`Please choose a noun:\n`)
           
for (var i = 0; i < alphabet.length; i++){
    console.log(`${alphabet[i]}) ${choices()[4][i + 1]}`) // display the choices for nouns
}
    nounChoice = rs.question(`Enter choice (a-e): `);
        
while (verify(nounChoice) != true){
    nounChoice = rs.question(`Enter choice (a-e): `);
}

    nounChoice = choices()[4][convert(nounChoice)];

console.log()
console.log(`Please choose another action word ending in 'ed':\n`)
           
for (var i = 0; i < alphabet.length; i++){
    console.log(`${alphabet[i]}) ${choices()[5][i + 1]}`) // display the choices for third action
}
    actionChoice3 = rs.question(`Enter choice (a-e): `);
        
while (verify(actionChoice3) != true){
    actionChoice3 = rs.question(`Enter choice (a-e): `);
}

    actionChoice3 = choices()[5][convert(actionChoice3)];

console.log()
console.log(`Please choose an adverb:\n`)
           
for (var i = 0; i < alphabet.length; i++){
    console.log(`${alphabet[i]}) ${choices()[6][i + 1]}`) // display the choices for adverbs
}
    adverbChoice = rs.question(`Enter choice (a-e): `);
        
while (verify(adverbChoice) != true){
    adverbChoice = rs.question(`Enter choice (a-e): `);
}

    adverbChoice = choices()[6][convert(adverbChoice)];

console.log();
console.log(`Your completed story:`);

replaceFile = storyFile
    .replaceAll("_1_", animalChoice.toUpperCase()) // replaces the strings in the file
    .replaceAll("_2_", actionChoice.toUpperCase())
    .replaceAll("_3_", adjectiveChoice.toUpperCase())
    .replaceAll("_4_", actionChoice2.toUpperCase())
    .replaceAll("_5_", nounChoice.toUpperCase())
    .replaceAll("_6_", actionChoice3.toUpperCase())
    .replaceAll("_7_", adverbChoice.toUpperCase());

console.log(replaceFile);
fs.writeFileSync(`the_story_file_updated.txt`, replaceFile); // writes output to new file

}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}