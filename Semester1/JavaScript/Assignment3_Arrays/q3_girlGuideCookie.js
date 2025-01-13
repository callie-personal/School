"use strict";
var input = require(`readline-sync`)
/*
Author: Callie Pretty
Date:   March 7 2023
Title: PROG1700 Assignment 3- Q3 Girl Guide Cookie Sell-off

*/
// DO NOT EDIT: The main function to house our program code 
/*
function getGirl(girlName, cookiesSold) {
    for (let i = 0; i < roomList.length; i++) {
      var data = {
        name: girlName[i],
        cookies: cookiesSold[i],
      };
*/

// function to find the sum of an array
function findSum(sumArray){
    var sum = 0;
    for (var i = 0; i < sumArray.length; i++){
        sum += sumArray[i];
    }
    return sum;
}
// function to find the highest number in an array
function findMost(mostArray){
    var most = 0;
    for (var i = 0; i < mostArray.length; i++){
        if (mostArray[i] >= most){
            most = mostArray[i];
        }
        return most;
    }

}

function main()
{
    // enter your code here
    // declaring variables
    var girlNum = Number(input.question(`Enter the number of guides selling cookies: `));
    var nameArray = [];
    var soldArray = [];
    var prizeArray = [];
    var total = 0;
    var highest = 0;
    // inputing array indexes
    for (var i = 0; i < girlNum; i++){
        nameArray[i] = input.question(`Enter the name of guide #${i}: `);
        soldArray[i] = Number(input.question(`Enter the number of boxes sold by ${nameArray[i]}: `));
        }
    
    total = findSum(soldArray);
    console.log (total);
    // find the average sold
    var avg = total / girlNum;
    highest = findMost(soldArray);
    // find which prize the guide qualifies for
    for (var i = 0; i < girlNum; i++){
        if (soldArray[i] == highest){
            prizeArray[i] = "Trip to Girl Guide Jamboree in Aruba!";
        }
        else if (soldArray[i] > avg){
            prizeArray[i] = "Super Seller Badge";
        }
        else if (soldArray[i] >= 1){
            prizeArray[i] = "Left over cookies";
        }
        else {
            prizeArray[i] = "";
        }
    }

        console.log(`The average number of boxes sold by each guide was: ${avg.toFixed(1)}`);
        console.log();
        console.log(`Guide:\t\t\tPrizes won:`);
        console.log(`------------------------------------------------------------------------------------`);

        for (var i = 0; i < girlNum; i++){
            console.log(`${nameArray[i]}\t\t\t- ${prizeArray[i]}`);
        }

    }



// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
