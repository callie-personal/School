"use strict";
const fs = require(`fs`);
const rs = require(`readline-sync`);


function main(){

// read csv file and store in rawText
const rawText = fs.readFileSync(`airline-safety.csv`, `utf8`);
const lines = rawText.split("\r\n"); //split the file by line
const airlineInfo2D = []; // declare and init the airlineInfo array


for (var i = 1; i < lines.length; i++){
    const airlineInfoRow = [];
//    airlineInfo2D.push(lines[i].split(","));
    for (var m = 0; m < lines[i].split(",").length; m++){
        if (m == 0){
            airlineInfoRow.push(lines[i].split(",")[m]);
        }
        else {
            airlineInfoRow.push(Number(lines[i].split(",")[m]));
        }
    }
    const fatalByKM = airlineInfoRow[4]+airlineInfoRow[7]/airlineInfoRow[1]*100;
}
console.log(airlineInfo2D[5][0]);
const highestFatalities = airlineInfo2D[0][8];
const highestFRateIndex = 0;

for (var i = 1; i , airlineInfo2D.length; i++){
    if (airlineInfo2D[i][8] > highestFatalities){
        highestFRate = airlineInfo2D[i][8];
        highestFRateIndex = i;
    }
}
console.log(`The airline with the highest fatalities per KM: ${airlineInfo2D[highestFRateIndex][0]}`);
}

if (require.main === module){
    main();
}
