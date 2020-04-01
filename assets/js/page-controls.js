/**
 * @window on page load event method for IDs on page will set the property ID's to none which will hide these on page loading. 
 */

window.onload = function() {
    document.getElementById("question_grid").style.display = "none";
    document.getElementById("score_grid").style.display = "none";
    document.getElementById("contactus_grid").style.display = "none";

};

/**
 * @function called showQuestions will show the questions container grid when the play button is pressed.
 */

var showQuestions = function() {
    document.getElementById("question_grid").style.display = "visible";
    console.log("hello world");
};