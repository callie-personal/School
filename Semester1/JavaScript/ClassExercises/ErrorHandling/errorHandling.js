"use strict";
/*
Author: Callie Pretty
Description: Week 12 in class demo of error handling
*/

var rs = require(`readline-sync`);

function main(){
    console.log(`This program adds two numbers and returns the sum`);
    var number1 = Number(rs.question(`Please input the first number: `));

    while (isDigit(number1) == false){
        number1 = Number(rs.question(`Please input a NUMBER: `));
    }

    var number2 = Number(rs.question(`Please input the second number: `));

    while (isDigit(number2) == false){
        number2 = Number(rs.question(`Please input a NUMBER: `));
    }

    console.log(number1 + number2);

}

function isDigit(num){
    return !isNaN(parseFloat(num))&&isFinite(num);
}

if (require.main === module){
    main();
}