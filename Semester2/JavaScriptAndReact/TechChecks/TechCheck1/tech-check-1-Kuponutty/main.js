/*
 * PHONEWORDS
 * Write a function that will take a phone word (vanity number) and return the correct telephone number.
 * The number pad looks like the following:
 * https://en.wikipedia.org/wiki/Telephone_keypad#/media/File:Telephone-keypad2.svg
 *
 * RULES
 * Given a phoneword:
 * 1. Ignore any non-alphanumeric characters (), -, etc.
 * 2. Keep any existing digits
 * 3. Resolve a letter to a number according to the keypad image
 * 4. All your code must be contained in the section outlined below
 */

var buttons = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]; //DO NOT MODIFY

// YOU CAN ADD TO AND MODIFY THE CODE BELOW THIS LINE
//   |
//   V

function convertPhoneWord(phoneWord) {
  //Enter your code in this function body
  let editedString = "";
  let lowerCaseString = "";
  let convertedString = "";

  //for loop to create a new string of just numbers & letters
  for (let i = 0; i < phoneWord.length; i++){
    if (isDigit(phoneWord.charAt(i)) === true || isLetter(phoneWord.charAt(i)) === true){
      editedString += phoneWord.charAt(i);
    }
   }
  //convert to lower case for easier checking
    lowerCaseString = editedString.toLowerCase();
  
  //process string/array to convert to a number value

  for (let i = 0; i < lowerCaseString.length; i++){
    //converted lowercaseString.charAt to a variable for easier reading
    let currentChar = lowerCaseString.charAt(i);
    if (isDigit(currentChar) === true){
      convertedString += currentChar;
    }
    else {
      for (let j = 0; j < buttons.length; j++){
  //changed indexOf to includes and added a break to go back to first loop
      if (buttons[j].includes(currentChar)){
        convertedString += (j + 2);
        break;
      }
    }
  }
    }
    return convertedString;
    }
    //random change to use proper commit note

//    ^
//    |
//YOU CAN ADD TO OR MODIFY THE CODE ABOVE THIS LINE

// DO NOT CHANGE ANY CODE AFTER THIS LINE.
//     |
//     |
//     V

//helper functions...do not modify, but you can use them in your code

function isDigit(character) {
  return "0123456789".indexOf(character) !== -1;
}

function isLetter(character) {
  character = character.toUpperCase();
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(character) !== -1;
}

testCode();
