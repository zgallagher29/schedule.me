/** This file should be mostly jquery to generate a class schedule 
 * There will have to be a way for us to get the info from the other JS files
 * But a good start is just generating the skeleton of a 7-day grid
*/

var schedule = $('#schedule_content');
/** in the end the number of days wanted and other info should come from user input */
var numberOfDays = 5;

$(document).ready(function () {

    $('#schedule_title').append('<h1 class="center-align thin">My Schedule</h1>')
    //define column size based on number of days desired
    var colSize = numberOfDays == 5 ? "col s5ths" : "col s7ths";

    for (var day = 0; day < numberOfDays; day++){

        //appends a column in the schedule content with id = day0, day1, etc
        schedule.append('<div class="' + colSize + ' indigo lighten-4" id=day' + day + '></div>');

        var currentDay = $('#day'+day);
        
        // there are 56 15-min intervals between 8am and 10pm, add a row in each day for each interval
        for (var time = 0; time < 56; time ++){
            currentDay.append('<div class="row" id=interval' + time + '></row>');
        }
    }

});