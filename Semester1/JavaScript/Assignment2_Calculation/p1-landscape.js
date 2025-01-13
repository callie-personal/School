"use strict";
var input = require("readline-sync");

/*
Student Name:   Callie Pretty
Date:           February 19 2023  
Program Title:  p1-landscape.js
Description:    Calculation of the price of landscaping
*/

function main() // <-- Don't change this line!
{   
    var baseLabour = 1000;


    var house = Number(input.question("Enter House Number: "));
    console.log();
    var length = Number(input.question(`Enter property depth (feet): `));
    console.log();
    var width = Number(input.question(`Enter property width (feet): `));
    console.log();
    var grass = Number(input.question(`Enter type of grass (fescue, bentgrass, campus): `));
    console.log();
    var grassCost = 0
    var surface = (+length * +width);
    var trees = Number(input.question(`Enter the number of trees: `));
    console.log();
    var treesCost = trees * 100;



    if (grass = "fescue"){
        grassCost = 0.05
    }
    else if (grass = "bentgrass"){
        grassCost = 0.02
    }
    else if (grass = "campus"){
        grassCost = 0.01
    }
    
    var totalCost = (baseLabour + treesCost + (grassCost * surface));

    if (+surface > 5000){
        totalCost = totalCost + 500;
    }

    console.log(`Total cost for house ${house} is: $${totalCost}`);

}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}