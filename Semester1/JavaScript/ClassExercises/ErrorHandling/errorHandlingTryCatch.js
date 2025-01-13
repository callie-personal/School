"use strict";
/*
Author: Callie Pretty
Description: Week 12 in class demo of error handling
*/

const rs = require(`readline-sync`);
const fs = require(`fs`);

function main(){


    const filename = "input.txt";
    const fileRead = false;
    while(fileRead == false){

    try{
        var data = fs.readFileSync(`./input.txt`,
        {encoding: `utf-8`, flag:`r`})
        fileread = true;
    }
    catch (e){
        console.log(`File not found!`);
        filename = rs.question(`Please enter the file patch again: `);
    }
}
    console.log(data);
}

function isDigit(num){
    return !isNaN(parseFloat(num))&&isFinite(num);
}

if (require.main === module){
    main();
}