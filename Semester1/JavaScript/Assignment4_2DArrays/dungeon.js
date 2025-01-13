"use strict";
var readlineSync = require("readline-sync");
var fs = require("fs");
var filename = "TC6_monsters.csv";

// DO NOT EDIT: The main function to house our program code 
function main()
{
    //declare an 2d array to store the information of each create
    var creaturesArray = [];
    //read the create information from the csv file and load it to the 2d array
    var data = fs.readFileSync(filename, "utf-8");
    var lines = data.split("\r\n");
    //go over each line
    for (var i=0; i<lines.length; i++)
    {
        creaturesArray.push(lines[i].split(","));
    }
    console.log(creaturesArray[3][1]);
    //starting the whole game loop
        //welcome the user
        console.log("Welcome to the Dungeon application where non shall survive! Simply try to live as long as you can");
        //continue (q to quit)
        var continueOrNot = readlineSync.question("Hit any key to continue ('Q' or 'q' to quit): ");
        console.log();

        while (continueOrNot.toLowerCase()!='q')
        {
            
        //ask user to enter the init hit points
            var userHitPoint = readlineSync.question("Please enter your initial hit points (1-200): ");
            while ((isNaN(parseInt(userHitPoint)))||(parseInt(userHitPoint) < 0) ||(parseInt(userHitPoint) > 200)){
                console.log("You do not listen very well do you? Think you are going to survive this dungeon?");
                //keep asking until the user input a valid value and store the input to a userHitPoint variable
                userHitPoint = readlineSync.question("Please enter your initial hit points (1-200): ");
            }
        console.log("==============================");
        //go over the the 2d array
        for (var row = 0; row < creaturesArray.length, userHitPoint>0; row++)
        {
            //calculate the userHitPoint
            //update user hit point
                 //as long as the userHitPoint >0
        //for each ceature
        //look for the name, attack and the damage
        //deduct the damage from the userHitPoint
        //display the message and show the userHitPoint
            userHitPoint -= Number(creaturesArray[row][2]);
            if (userHitPoint<0)
            { 
                userHitPoint = 0;
            }
            console.log(`You were attacked by a ${creaturesArray[row][0]} with a ${creaturesArray[row][1]} for ${creaturesArray[row][2]} damage. Current hit points: ${userHitPoint}`);
        }
        //print the "sad" message
        console.log("That was sad. And brief. At least the elf feels better about himself!!!");
        console.log();
        

        //welcome and ask user if they want to quit
        console.log("Welcome to the Dungeon application where non shall survive! Simply try to live as long as you can");
        //continue (q to quit)
        continueOrNot = readlineSync.question("Hit any key to continue ('Q' or 'q' to quit): ");
        }
        console.log("Tha'ts it. Retreat in fear and warn your friends!")
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}