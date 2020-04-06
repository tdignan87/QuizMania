/**
 * @window on page load event method for IDs on page will set the property ID's to none which will hide these on page loading. 
 */
window.onload = function() {
    document.getElementById("question_grid").style.display = "none";
    document.getElementById("score_grid").style.display = "none";
    document.getElementById("contactus_grid").style.display = "none";
    document.getElementById("loading").style.display = "none";
    document.getElementById("main-status").style.display = "none";
};
$("#play-submit-btn").click(function() {


    })
    /**
     * Show selected value in the dropdown titles using jQuery
     * 
     */
$("#navbar_register_btn").click(function() {
    document.getElementById("contactus_grid").style.display = "block";
})