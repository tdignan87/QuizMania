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
 * The jumbotron display will also not be visible.
 */

let showQuestions = function() {
    document.getElementById("question_grid").style.display = "block";
    document.getElementById("score_grid").style.display = "block";

    document.getElementById("options-container-choices").style.display = "none";
    document.getElementById("jumbo-picture-main").style.display = "none";
    document.getElementById("play-submit-btn").style.display = "none";
};

/**
 * Show selected value in the dropdown titles using jQuery
 * 
 */
let dropDownSelect = function() {

};