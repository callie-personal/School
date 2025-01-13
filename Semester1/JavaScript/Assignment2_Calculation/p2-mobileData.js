"use strict";
var input = require("readline-sync");

/*
Student Name:   Callie Pretty
Date:           February 19 2023 
Program Title:  p2-mobileData.js
Description:    Calculating mobile phone costs 
*/

function main() // <-- Don't change this line!
{   
    var usage = Number(input.question(`Enter data usage (Mb): `));
    var extraMb = 0;
    var totalCharge = 0;
    if (usage > 200 && usage <= 1000){
        extraMb = usage - 200;
    }

    if (usage <= 200){
        totalCharge = 20.00
    }

    else if (usage > 200 && usage <= 500){
        totalCharge = 0.105 * extraMb + 20;
    }
    else if (usage > 500 && usage <= 1000){
        totalCharge = 0.110 * extraMb + 20;
    }
    if (usage > 1000){
        totalCharge = "118.00"
    }
    
    console.log();
    console.log(`Total charge is $${totalCharge}`);

}

// Do not change any of the code below!
if (require.main === module)
{
    main();
}