"use strict";
var readlineSync = require("readline-sync");
// DO NOT EDIT: The main function to house our program code 

//Student name: Callie Pretty
//Date:         February 22 2023
//Function:     Sorting names into houses
function assignHouse(lastName)
{
/*
    var house1 = "Gryffindor";
    var house2 = "Hufflepuff";
    var house3 = "Ravenclaw";
    var house4 = "Slytherin";
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    */

 //  for (var count = 0; count < 10; count++){

    var house
    var houseNum = 0;
    var house1 = "Gryffindor";
    var house2 = "Hufflepuff";
    var house3 = "Ravenclaw";
    var house4 = "Slytherin";

/*
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
    */

    if (lastName == "Potter"){
 //       console.log("Potter!?  *grumble*: " + house1);
 //       count1++;
        house = house1;
        return house;
    }
    else if (lastName == "Malfoy") {
 //       console.log("Malfoy, must be " + house4);
 //       count4++;
        house = house4;
        return house;
    }

    else {var houseNum = Math.floor(Math.random() * 3);

    if (houseNum == 0) {
   //     console.log(`${lastName}? Umm.... ${house1}`);
        house = house1;
        return house;
    }
    else if (houseNum == 1) {
  //      console.log(`${lastName}? Umm.... ${house2}`);
        house = house2;
        return house;
    }
    else if (houseNum == 2) {
 //       console.log(`${lastName}? Umm.... ${house3}`);
        house = house3;
        return house;
    }
    else if (houseNum == 3) {
 //       console.log(`${lastName}? Umm.... ${house4}`);
        house = house4;
        return house; 
    }
    }
} 

function main()
{
    var lastName = readlineSync.question(`What is your last name?: `);
    var houseName = assignHouse(lastName);

    console.log(`${lastName}?.....  ${houseName}!`);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
