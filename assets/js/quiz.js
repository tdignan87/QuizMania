/** function loads on Index load event. Using function to fetch the open trivia API.
 ** then if we get a response, we are converting it to JSON format and then logging the raw data into the console.
 */

var noOfQuestions = [10, 20, 30];
let difficultySetting = ["Easy", "Medium", "Hard"];


function getQuestions(difficulty, questionAmount, category) {
    fetch(
            `https://opentdb.com/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}&type=multiple`
        )
        .then(response => response.json())
        .then(rawData => {
            console.log(rawData.results);
            generateQuestions(rawData)
        })
        .catch(error => console.log(error));
}


$(document).ready(function generateCategories() {
    fetch(`https://opentdb.com/api_category.php`)
        .then(res => res.json())
        .then(data => {
            data.trivia_categories.forEach(category => {
                $("#dropdown-choices-category").append(`<option value="${category.id}">${category.name}</option>`)

            })
        })


    $(document).ready(function generateQuestions() {
        $.each(noOfQuestions, function(val, text) {
            $('#dropdown-choices-questions').append($(`<option>${text}</option>`))
        });
    })

    $(document).ready(function generateDifficulty() {
        $.each(difficultySetting, function(val, text) {
            $('#dropdown-choices-difficulty').append($(`<option>${text}</option>`))
        });
    })

    $("play-submit-btn").click(function() {
        document.getElementById("question_grid").style.display = "block";
        document.getElementById("score_grid").style.display = "block";

        document.getElementById("options-container-choices").style.display = "none";
        document.getElementById("jumbo-picture-main").style.display = "none";
        document.getElementById("play-submit-btn").style.display = "none";
    })
});