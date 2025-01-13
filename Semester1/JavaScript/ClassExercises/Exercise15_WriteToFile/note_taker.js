/*  take user input
    store input in external file
    append each note to the end of the file so it's not overwritten
    apply the date to each note
*/
"use strict";
// Author:  Callie Pretty
// Date:    March 9 2019
// Description: In class exercise 15 - ask user to input a note, store in a file with time stamp
var input = require('readline-sync');
var fs = require(`fs`);

function main()
{
    var filename = "note_log.txt";
    var note = input.question(`Please enter a message/note: `);
    while (note.toLowerCase() != `quit`){
    var filename = "note_log.txt";
    addNote(filename, note);
    var note = input.question(`Please enter a message/note: `);
    
    
}
}

function addNote(filename, note){
    var originalText = fs.readFileSync(filename);
    fs.writeFileSync(filename, + note + "\n" + originalText);
    const date = new Date();
    var timeStamp = date.toISOString();
    timeStamp = timeStamp.replace("T", " ");
    timeStamp = timeStamp.replace("Z", " ");
    var outputString = timeStamp + "\t" + note + "\n" + originalText;
    var fileHandle = fs.writeFileSync(filename, outputString);
}




if (require.main === module)
{
    main();
}