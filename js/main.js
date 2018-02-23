/** Commenting out the thought process here... */

/** 1. We will want a separate (probably JS) that defines REGEX for different types of highlighted information.
  * this will make it easy for someone to fork the project, simply edit that file and make a regex expression
  * that will work with their specific school's web portal and however it generates their schedules
  **/

/** Here in the main file (probably wont stay named main), we will pop up options when the user right clicks
  * and there is text highlighted
  **/

/** Some basic options will include 1) add currently highlighted to schedule 2) generate schedule 3) remove from schedule */

/** When the user chooses to add highlighted info to their schedule, we will use another JS file to parse the info
 * and then store the info temporarily */

 /** When the user wants to remove, we will remove the info from temp storage */

 /** When the user wants to generate the schedule, take the stored info, generate an html/css/some cool framwork based web page
   * and open it in a new tab. Should be nice looking and easy to print!
   **/
