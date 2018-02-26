/** This file should be mostly jquery to generate a class schedule 
 * There will have to be a way for us to get the info from the other JS files
 * But a good start is just generating the skeleton of a 7-day grid
*/

var schedule = $('#schedule_content');
var scheduleDayTitles = $('#schedule_day_titles');

/** in the end the number of days wanted and other info should come from user input */

$(document).ready(function () {

    $('#schedule_title').append('<h1 class="center-align thin">My Schedule</h1>')
    var colSize = "col s5ths";

    for (var day = 0; day < 5; day++){

        var dayOfWeek = "";

        switch (day){
            case 0: 
                dayOfWeek = "Monday";
                break;
            case 1: 
                dayOfWeek = "Tuesday";
                break;
            case 2: 
                dayOfWeek = "Wednesday";
                break; 
            case 3: 
                dayOfWeek = "Thursday";
                break;
            case 4: 
                dayOfWeek = "Friday";
                break;   
        }

        //appends a column in the schedule content with id = day0, day1, etc
        scheduleDayTitles.append('<div class="' + colSize + '" id=day' + day + 'Title><h4 class="thin">' + dayOfWeek + '</h3></div>');
        schedule.append('<div class="' + colSize + ' indigo lighten-4" id=day' + day + '></div>');

        var currentDay = $('#day'+day);
        
        // there are 56 15-min intervals between 8am and 10pm, add a row in each day for each interval
        for (var time = 0; time < 56; time ++){
            currentDay.append('<div class="row" id=interval' + time + '></row>');
        }
    }

});