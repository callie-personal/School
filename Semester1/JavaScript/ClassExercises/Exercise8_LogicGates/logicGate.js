"use strict";
var input = require(`readline-sync`);
/*
Author: Callie Pretty
Date: February 19 2023
Description: Logic Gate
*/

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // enter your code here
    //input
    var var1 = input.question(`Value of P (T or F): `);
        if (var1.toLowerCase() === "true") {
             var1 = Boolean(true);
        }
        else if (var1.toLowerCase() == "false" ){
             var1 = Boolean(false);
        }

    var var2 = input.question(`Value of q (T or F): `);
        if (var2.toLowerCase() === "true" ){
             var2 = Boolean(true);
        }
        else if (var2.toLowerCase() === "false" ){
             var2 = Boolean(false);
        }
    var var3 = input.question(`Value of r (T or F): `);
        if (var3.toLowerCase() === "true" ){
             var3 = Boolean(true);
        }
        else if (var3.toLowerCase() === "true" ){
             var3 = Boolean(false);
        }


/*
        if (typeof p === "string" && p.toLowerCase() === 'true')
            return true;    
        else if (typeof p === "string" && p.toLowerCase() === 'false')
            return false;
            return false;

        if (typeof q === "string" && q.toLowerCase() === 'true')
            return true;    
        else if (typeof q === "string" && q.toLowerCase() === 'false')
            return false;

        if (typeof r === "string" && r.toLowerCase() === 'true')
            return true;    
        else if (typeof r === "string" && r.toLowerCase() === 'false')
            return false;   
*/
    if (var1 === true || var2 === true && var3 === false){
        console.log(`Something Printed!`);
    }

}
  
    //process
  
    //output

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
