"use strict";

function reportTimeUntilEndOfTerm()
{
    var target = document.getElementById('target');
    var current_date_time = new Date();
    var end_term_date_time = new Date('December 13, 2019 16:30:00');

    var difference_in_milliseconds = end_term_date_time - current_date_time;
    var difference_in_seconds = difference_in_milliseconds / 1000;

    var difference_in_hours = Math.floor(difference_in_seconds / 3600);
    var days = Math.floor(difference_in_hours / 24);
    var hours = difference_in_hours - (days * 24);

    var seconds_left =  difference_in_seconds - (days * 24 * 3600) - (hours * 3600);

    var minutes = Math.floor(seconds_left / 60);
    var seconds = Math.floor(seconds_left - (minutes * 60));

    target.innerHTML =`Days: ${days}<br/> Hours: ${hours}<br/> Minutes: ${minutes}<br/> Seconds: ${seconds}`;
}

/*document.getElementById('myBody').addEventListener(
	'load',function(){
		setInterval(reportTimeUntilEndOfTerm, 5000);
	}
);*/