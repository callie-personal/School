//Setting the date for my next birthday
let nextBirthday = new Date(2024, 7, 30, 0, 0, 0, 0);
//Setting the current date
let currentDate = new Date();

//Calculating the miliseconds until my next birthday
let timeUntilBirthday = nextBirthday - currentDate;

//breaking that down into weeks, days, hours, minutes, seconds
let totalSeconds = Math.floor(timeUntilBirthday / 1000);
let totalMinutes = Math.floor(totalSeconds / 60);
let totalHours = Math.floor(totalMinutes / 60);
let totalDays = Math.floor(totalHours / 24);
let totalWeeks = Math.floor(totalDays / 7);

//taking the remainders to break that down into a weeks, days, hours, minutes, seconds until birthday
let numDays = totalDays % 7;
let numHours = totalHours % 24;
let numMinutes = totalMinutes % 60
let numSeconds = totalSeconds % 60



console.log("There are " + totalWeeks + " weeks, " + numDays + " days, " + numHours + " hours, " + numMinutes + " minutes, " + numSeconds + " seconds until my next birthday!");