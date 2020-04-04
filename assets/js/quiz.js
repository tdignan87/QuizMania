/** function loads on Index load event. Using function to fetch the open trivia API.
 ** then if we get a response, we are converting it to JSON format and then logging the raw data into the console.
 */

var noOfQuestions = [10, 20, 30];
let difficultySetting = ["Easy", "Medium", "Hard"];
let questions = [""];

function getQuestions(difficulty, questionAmount, category) {
    fetch(
            //  `https://opentdb.com/api.php?amount=${questionAmount}&category=${category}&difficulty=${difficulty}&type=multiple`
            `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
        )
        .then(response => response.json())
        .then(rawData => {
            //    console.log(rawData.results);
            generateQuestions(rawData)

        })
        .catch(error => console.log(error));



}

$("#play-submit-btn").click(function() {
    getQuestions();
})


function generateQuestions(data) {
    data.results.forEach(singleQuestion => {
        $("#question-main").append(`<h3 id="question-main">${singleQuestion.question}</h3>`);
        console.log(singleQuestion);
    });
    return;
}



$(document).ready(function generateCategories() {
    fetch(`https://opentdb.com/api_category.php`)
        .then(res => res.json())
        .then(data => {
            data.trivia_categories.forEach(category => {
                $("#dropdown-choices-category").append(`<option value="${category.id}">${category.name}</option>`)

            })
        })

    $(document).ready(function questionsAmount() {
        $.each(noOfQuestions, function(val, text) {
            $('#dropdown-choices-questions').append($(`<option>${text}</option>`))
        });
    })

    $(document).ready(function generateDifficulty() {
        $.each(difficultySetting, function(val, text) {
            $('#dropdown-choices-difficulty').append($(`<option>${text}</option>`))
        });
    })

    /** Generate question from API and display in the form
     ** 
     */
});