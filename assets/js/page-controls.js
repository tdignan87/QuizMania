/**
 * @window on page load event method for IDs on page will set the property ID's to none which will hide these on page loading. 
 */

window.onload = function() {
    document.getElementById("question_grid").style.display = "none";
    document.getElementById("score_grid").style.display = "none";
    document.getElementById("contactus_grid").style.display = "none";

    //  const newLocal = "#question_grid";
    //  $("#question_grid").css({ "width": "0", "height": "0", "padding": "0" })
    //  $("quiz-container").css({ "width": "0", "height": "0", "padding": "0" })
    //  $("#score_grid").css({ "width": "0", "height": "0" });
    //  $("#contactus_grid").css({ "width": "0", "height": "0" });
};

$("#play-submit-btn").click(function() {
    document.getElementById("question_grid").style.display = "block";
    document.getElementById("score_grid").style.display = "block";

    document.getElementById("options-container-choices").style.display = "none";
    document.getElementById("jumbo-picture-main").style.display = "none";
    document.getElementById("play-submit-btn").style.display = "none";

})

/**
 * Show selected value in the dropdown titles using jQuery
 * 
 */
$("#navbar_register_btn").click(function() {
    document.getElementById("contactus_grid").style.display = "block";


})