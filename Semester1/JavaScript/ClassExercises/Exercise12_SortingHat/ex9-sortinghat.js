"use strict";
var readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 

//Student name: Callie Pretty
//Date:         February 22 2023
//Function:     Sorting names into houses

function main()
{
    var house1 = "Gryffindor";
    var house2 = "Hufflepuff";
    var house3 = "Ravenclaw";
    var house4 = "Slytherin";
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    
for (var count = 0; count < 10; count++){
    var lastName = readlineSync.question(`What is your last name?: `);

    if (house == 0){
        count1++;
    }
    else if (house ==1){
        count2++;
    }
    else if (house == 2){
        count3++;
    }
    else if (house == 3){
        count4++;
    }

    if (lastName == "Potter"){
        console.log("Potter!?  *grumble*: " + house1);
        count1++;
    }
    else if (lastName == "Malfoy") {
        console.log("Malfoy, must be " + house4);
        count4++;
    }

    else {var house = Math.floor(Math.random() * 3);

    if (house == 0) {
        console.log(`${lastName}? Umm.... ${house1}`);
    }
    else if (house == 1) {
        console.log(`${lastName}? Umm.... ${house2}`);
    }
    else if (house == 2) {
        console.log(`${lastName}? Umm.... ${house3}`);
    }
    else if (house == 3) {
        console.log(`${lastName}? Umm.... ${house4}`);
    }
    }
}
console.log();
console.log(`Gryffindor = ${count1}`);
console.log(`Hufflepuff = ${count2}`);
console.log(`Ravenclaw = ${count3}`);
console.log(`Slytherin = ${count4}`);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
