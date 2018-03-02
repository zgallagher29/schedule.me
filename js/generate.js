    var schedule = $('#schedule_content');
    var scheduleDayTitles = $('#schedule_day_titles');
    var defaultColor = "red lighten-3";

    //some sample classes put into a sample array (like what we will be working with once the other part is working)
    var classOne = {"name": "COMP 412","timeString": "11:30am - 12:45pm","time": ["1130","1245"],"days":[1,3],"location": "Cuneo 301"};
    var classTwo = {"name": "HONR 301","timeString": "8:15am - 9:05am","time": ["815","905"], "location": "Mundelein 607","days": [0,2,4]};
    var classes = [classOne, classTwo];

/** TODO: maybe in the top right or left corner, have options so user can customize their colors and stuff */

    $(document).ready(function () {

        $('#schedule_title').append('<h2 href="javascript:;" contentEditable="true" class="center-align thin">My Schedule</h2>');

        generateSchedule();
       
    });

    function generateSchedule(){
        /** Append the left time line before adding center content */
        schedule.append('<div id="time_line_left" class="col s1"></div>');

        /** Determine the day of the week via an integer. 5 days only. */
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
            /** Appends a column in the center for each day. */
            scheduleDayTitles.append('<div class="col s5ths" id=day' + day + 'Title><span class="center-align thin">' + dayOfWeek + '</span></div>');
            schedule.append('<div class="col s5ths" id=day' + day + '></div>');     
            
            for (var time = 0; time <= 56; time ++){
                $('#day'+day).append('<div class="row" id=interval' + time + day + '></row>');

                if (time%4 == 0 || time == 0 ){
                    
                    $('#interval'+time+day).css('height','22.5px');
                    
                }
            }
        }
        /** Append the right time line after center content skeleton has been generated. */
        schedule.append('<div id="time_line_right" class="col s1"></div>');
        generateTimeLines();


        //for each day, find classes that happen
        //calculate intervals for that class
        //set a card panel where the time line top pos is and end it where the bottom pos is
        for (var day = 0; day < 5; day++){
            for (var i = 0; i < classes.length; i++){
                if (classes[i].days.includes(day)){
                    makeCard(classes[i],day);
                }
            }
        }
    }

    function makeCard(classInfo,day){

        var card_panel = $('<div id="class' + classInfo.name + '" class="card-panel ' + defaultColor + '"></div>');
        card_panel.append('<div class="row"><div class="col s6">' + classInfo.name + '</div><div class="col s6"</div></div>');
        card_panel.append('<span>' + classInfo.timeString + '<br/>' + classInfo.location + '</span>');
        
        var intervals = determineIntervals(classInfo.time);
        $('#interval'+(intervals[0]-1)+day).append(card_panel);
        var combined_time = intervals[0]+intervals[1];
        
    }

    function generateTimeLines(){
        /** Put the intervals in the timelines so that the classes can be based off their coordinates for top/bottom. */
        var time_line_left = $('#time_line_left');
        var time_line_right = $('#time_line_right');

        for (var time = 0; time <= 56; time ++){
            time_line_left.append('<div class="row" id=interval_left' + time + '></row>');
            time_line_right.append('<div class="row" id=interval_right' + time + '></row>');

        /** Determine the time based on how many hours have passed by dividing by 4. Ex) its 10am because 8/4 is 2, and we start at 8am. */
        if (time%4 == 0 || time == 0 ){
            var hour = 8 + (time/4);
            if (hour > 12){
                hour -= 12;
            }
            $('#interval_left'+time).append('<span>'+hour+'</span>');
            $('#interval_right'+time).append('<span>'+hour+'</span>');
            }
        }
    }
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

        return Math.round(minutes/15);
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

