"use strict";
var input = require('readline-sync')

/*
Student Name:   Callie Pretty
Date:           Feb 19 2023  
Program Title:  p3-autoInsurance.js
Description:    Calculating monthly auto insurance
*/
function main() // <-- Don't change this line!
{
var sex = input.question(`Are you 'Male' or 'Female'?: `);
var age = Number(input.question(`Enter your age: `));
var price = Number(input.question(`Enter the purchase price of the vechile: `));
var totalCost = 0

if (sex == "Male"){
    if (age >= 15 && age < 25){
        totalCost = ((price * 0.25) / 12);
    }
    else if (age >= 25 && age < 40){
        totalCost = ((price * 0.17) / 12);
    }
    else if (age >= 40 && age < 70){
        totalCost = ((price * 0.1) / 12);
    }
}

else if (sex == "Female"){
    if (age >= 15 && age < 25){
        totalCost = ((price * 0.25) / 12);
    }
    else if (age >= 25 && age < 40){
        totalCost = ((price * 0.17) / 12);
    }
    else if (age >= 40 && age < 70){
        totalCost = ((price * 0.1) / 12);
    }
}
    console.log(`Your monthly insurance will be $${totalCost.toFixed(2)}`);
    
}



// Do not change any of the code below!
if (require.main === module)
{
    main();
}