"use strict";

if(localStorage.notes == null)
{
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            localStorage.notes = this.responseText;
            displayNotes();
        }
    };
    request.open("GET", "n.json", true);
    request.send();
}
else
{
    displayNotes();
}

function displayNotes()
{
    var notes = JSON.parse(localStorage.notes);
    var table = document.getElementById('dis');

    var noteHtml = "";
    noteHtml += "<h4>Notes</h4>";
    noteHtml += "<table>";
    noteHtml += "<thead>";
    noteHtml += "<tr>";
    noteHtml += "<th>Date & Time</th>";
    noteHtml += "<th>Note</th>";
    noteHtml += "</tr>";
    noteHtml += "</thead>";
    noteHtml += "<tbody>";


    for(var i = 0; i < notes.length; i++)
    {
        var row = notes[i];



        noteHtml += "<tr>";
        noteHtml += `<td>${row["T"]}</td>`;
        noteHtml += `<td>${row["N"]}</td>`;
        noteHtml += "</tr>";
    }

    noteHtml += "</tr>";
    noteHtml += "</tbody>";
    noteHtml += "</table>";
    
    table.innerHTML = noteHtml;
}

function addNotes()
{
    var currentNotes = JSON.parse(localStorage.notes);
    var newNotes = document.getElementById('n').value;
    var date = new Date();
    var dateFormat = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    
    var n_e = {
        "T": dateFormat,
        "N": newNotes
    };

    currentNotes.push(n_e);
    localStorage.notes = JSON.stringify(currentNotes);

    displayNotes();
}


document.getElementById("lbutton").addEventListener("click", displayNotes2);


