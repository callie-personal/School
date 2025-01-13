"use strict";

/*
Author: Callie Pretty
Date:   February 22 2023
Description: In class exercise 12 Part 1
*/

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // enter your code here
    var counter = 2;
    var sum = 0
    
    while (counter <= 100){
        if (counter % 2 == 0){
            sum = sum + counter;
        }
            counter ++;
        }
    console.log(sum);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
