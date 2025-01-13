"use strict";
var input = require(`readline-sync`);
/*
Author: Callie Pretty
Date:   March 7 2023
Title: PROG1700 Assignment 3- Q1 Timesheet

*/
// DO NOT EDIT: The main function to house our program code 
function main()
{
    var hoursWorked = new Array(5);
    var mostWorked = 0;
    var totalHours = 0;
    var avgHours = 0;
    var dayNum = 0;
    var dashes = "-----------------------------------------------------";

    for (var i = 0; i < hoursWorked.length; i++){
        hoursWorked[i] = Number(input.question(`Enter hours worked on day ${(i + 1)}: `));
    }

    for (var i = 0; i < hoursWorked.length; i++){
        totalHours = totalHours + hoursWorked[i];
    }

    avgHours = totalHours / hoursWorked.length;

    console.log(dashes);

    for (var i = 0; i < hoursWorked.length; i++){
    if (hoursWorked[i] > mostWorked){
        mostWorked = hoursWorked[i];
        dayNum = i + 1;
    }
    }
    console.log(`The most hours worked was on:`);
    for (var i = 0; i < hoursWorked.length; i++){
        if (mostWorked === hoursWorked[i]){
            console.log(`Day #${(i + 1)} when you worked ${mostWorked} hours.`);
        }
    }
    console.log(dashes);
    console.log(`The total number of hours worked was: ${totalHours} \nThe average number of hours worked each day was: ${avgHours.toFixed(1)}`);
    console.log(dashes);
    console.log(`Days you slacked off (i.e. worked less than 7 hours):`)
    for (var i = 0; i < hoursWorked.length; i++){
        if (hoursWorked[i] < 7){
            console.log(`Day #${i + 1}: ${hoursWorked[i]} hours`)
        }
    }
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
