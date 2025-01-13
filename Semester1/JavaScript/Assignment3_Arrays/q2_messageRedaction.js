"use strict";

/*
Author: Callie Pretty
Date:   March 7 2023
Title: PROG1700 Assignment 3- Q2 Message Redaction

*/
var input = require(`readline-sync`)

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // enter your code here
    var phrase = new Array();
    var redact = new Array();
    var numRedact = 0;
    var newPhrase = "";
    var replaced = "_";
    var addChar = "";
    // infinite loop until user enters quit
    while (1 > 0){
    phrase = input.question(`Type a phrase (or quit to exit program): `);
    if (phrase.toLowerCase() === "quit"){
        break;
    }
    else {

    console.log();
    redact = input.question(`Type a comma-separated list of letters to redact: `);
    // replacing all listed letters with underscores
    for (var i = 0; i < phrase.length; i++){
        for (var j = 0; j < redact.length; j++){
            if (redact[j].toLowerCase() === phrase[i].toLowerCase()){
                addChar = replaced;
                numRedact++;
                break;
                }
            else {
                addChar = phrase[i];
            }
        }
        newPhrase += addChar;
    }
    console.log(`Number of letters redacted: ${numRedact}`);
    console.log(`Redacted phrase: ${newPhrase}`);
    newPhrase = "";
    numRedact = 0;
}

}

}


// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
