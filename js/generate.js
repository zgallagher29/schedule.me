    /** This file should be mostly jquery to generate a class schedule 
     * There will have to be a way for us to get the info from the other JS files
     * But a good start is just generating the skeleton of a 7-day grid
    */

    var schedule = $('#schedule_content');
    var scheduleDayTitles = $('#schedule_day_titles');

    /** in the end the number of days wanted and other info should come from user input */
    
    /**
     * Credit to https://stackoverflow.com/questions/16650207/javascript-elapsed-minutes-between-two-times
     */
    function determineInterval(timeArray){
        var start_time = timeArray[0];
        var end_time = timeArray[1];

        var start_hour = start_time.slice(0, -2);
        var start_minutes = start_time.slice(-2);

        var end_hour = end_time.slice(0, -2);
        var end_minutes = end_time.slice(-2);

        var startDate = new Date(0,0,0,start_hour, start_minutes);
        var endDate = new Date(0,0,0,end_hour, end_minutes);

        var millis = endDate - startDate;
        var minutes = millis/1000/60;

        return minutes/15;
    }

    /** Calls the above function to determine intervals before, during, and after class */
    function determineIntervals(timeArray){

        var class_start = timeArray[0];
        var class_end = timeArray[1];

        var btwn_8_and_start = determineInterval(["0800",timeArray[0]]);
        var btwn_class_start_and_end = determineInterval(timeArray);
        var btwn_end_and_10 = determineInterval([timeArray[1],"2200"]);

        return ([btwn_8_and_start,btwn_class_start_and_end,btwn_end_and_10]);
    }

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
            scheduleDayTitles.append('<div class="' + colSize + '" id=day' + day + 'Title><h43 class="thin">' + dayOfWeek + '</h3></div>');
            schedule.append('<div class="' + colSize + '" id=day' + day + '></div>');

            var currentDay = $('#day'+day);
            
            // there are 56 15-min intervals between 8am and 10pm, add a row in each day for each interval
            for (var time = 0; time < 56; time ++){
                currentDay.append('<div class="row" id=interval' + time + day + '></row>');
            }
        }

        var exampleArray = ["1130","1245"];
        var times = determineIntervals(exampleArray);

        for (var i = 0; i < times[1]; i++){
            var intervalNumber = times[0]+i;
            var intervalElement = $('#interval'+intervalNumber+'1');
            intervalElement.removeClass("row");
            intervalElement.addClass("row-class");
            intervalElement.append('<div class="red lighten-3">Class</div>');
        }

    });
