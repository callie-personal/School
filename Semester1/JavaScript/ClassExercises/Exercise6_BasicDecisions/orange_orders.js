"use strict";
var input = require(`readline-sync`);
/*
Author: Callie Pretty
Date: February 19 2023
Description: 
*/

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // enter your code here
    //input
    var orangeAmount = parseInt(input.question(`Please enter the number of pounds of oranges: `));
    var orangeCost = (orangeAmount * 1.99);
    var flatShipping = 7.5;
if (orangeAmount >= 100) {flatShipping = (flatShipping - 1.5)};
    var totalCost = (orangeCost + flatShipping);




    //process
console.log(`Shipping cost: $${flatShipping}`);
console.log(`Final cost of order: $${totalCost}`);;

  
    //output
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
